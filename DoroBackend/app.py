from flask_restful import Api, Resource
from flask import Flask, request


app = Flask(__name__)
api = Api(app, '/api/v1')

maschines = {"Waschmaschine 1": "Free", "Waschmaschine 2": "In Use", "Waschmaschine 3": "Done", "Waschmaschine 4": "Done"}
trockner = {"Trockner 1": "Free", "Trockner 2": "Done"}

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

api.add_resource(Waschmaschinen, '/w_machines_status')
api.add_resource(Trockner, '/trockner_status')