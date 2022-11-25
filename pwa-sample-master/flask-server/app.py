import json
import datetime
from flask import Flask, jsonify, request
# from flask_sqlalchemy import Column, Integer, String, Text, DateTime, Boolean, ForeignKey, SQLAlchemy
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite3'
db = SQLAlchemy(app)

class Subscriber(db.Model):
    __tablename__ = 'subscriber'
    id = db.Column(db.Integer, primary_key=True, default=None)
    created = db.Column(db.DateTime)
    modied = db.Column(db.DateTime)
    subscription_info = db.Column(db.JSON)
    is_active = db.Column(db.Boolean, default=True)

    @property
    def subscription_info_json(self):
        return json.loads(self.subscription_info)

    @subscription_info_json.setter
    def subscription_info_json(self, value):
        self.subscription_info = json.dumps(value)


@app.route('/api/subscription', methods=['POST'])
def subscribe():
    subscription_info = request.json.get('sub')
    print(subscription_info)
    # if is_active=False == unsubscribe
    is_active = request.json.get('is_active')

    # we assume subscription_info shall be the same
    item = Subscriber.query.filter(Subscriber.subscription_info == subscription_info).first()
    if not item:
        item = Subscriber()
        item.created = datetime.datetime.utcnow()
        item.subscription_info = subscription_info

    item.is_active = is_active
    item.modified = datetime.datetime.utcnow()
    db.session.add(item)
    db.session.commit()

    return jsonify({ "id": item.id })

@app.route('/api/notifications', methods=['GET', 'POST'])
def notify():
    from pywebpush import webpush, WebPushException
    WEBPUSH_VAPID_PRIVATE_KEY = 'RcxAnyCFK8gcfL9dFaVD8E6gzpdRtWx3tyH3F21kXhI'

    items = Subscriber.query.filter(Subscriber.is_active == True).all()
    count = 0
    for _item in items:
        try:
            print(_item.subscription_info)
            webpush(
                subscription_info=_item.subscription_info,
                data='{"notification": {"title": "Hello", "body": "World!"}}',
                vapid_private_key=WEBPUSH_VAPID_PRIVATE_KEY,
                vapid_claims={
                    "sub": "mailto:webpush@mydomain.com"
                }
            )
            count += 1
        except WebPushException as ex:
            print("I'm sorry, Dave, I can't do that. Reason: {}".format(ex))


    return '{"message": "Notifications sent successfully"}'


app.run(port=3000)