from flask_restful import Api, Resource
from flask import Flask, request


app = Flask(__name__)
api = Api(app, '/api/v1')

maschines = {"Waschmaschine 1": "Free", "Waschmaschine 2": "In Use", "Waschmaschine 3": "Done", "Waschmaschine 4": "Done"}
trockner = {"Trockner 1": "Free", "Trockner 2": "Done"}

marketplace = {"id": 1, "name": "Ak-47", "description": "Very cheap and very easy to use", "price": 4.99, "quantity": 2, "image": "hihi"}
sharedplace = {"data": [
    {"id": 1, "name": "Pflaster", "description": "Wichtig wenn man sich geschnitten hat", "image": "hihi", "category": "Supply"},
    {"id": 2, "name": "Bügeleisen", "description": "Für Hemden", "image": "hihi", "category": "Gerät"}
    ]}

class Waschmaschinen(Resource):
    def get(self):
        return maschines
    
    def post(self):
        machine_id = request.form['machine_id']
        machine_status = request.form['machine_status']
        maschines[machine_id] = machine_status
        return f"Status set to {machine_status}"


class Trockner(Resource):
    def get(self):
        return trockner

    def post(self):
        machine_id = request.form['machine_id']
        machine_status = request.form['machine_status']
        trockner[machine_id] = machine_status
        return f"Status set to {machine_status}"


class Marketplace(Resource):
    def get(self):
        pass

    def post(self):
        pass


class Sharedplace(Resource):
    def get(self):
        return sharedplace["data"]

    def post(self):
        pass

api.add_resource(Waschmaschinen, '/w_machines_status')
api.add_resource(Trockner, '/trockner_status')
api.add_resource(Marketplace, '/marketplace')
api.add_resource(Sharedplace, '/sharedplace')