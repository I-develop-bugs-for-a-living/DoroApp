from flask_restful import Api, Resource
from flask import Flask

app = Flask(__name__)

api = Api(app)

class Waschmaschinen(Resource):
    def get(self):
        return {"Waschmaschine 1": True, "Waschmaschine 2": False}

api.add_resource(Waschmaschinen, '/w_maschine_status')