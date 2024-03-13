from flask import Flask
from flask_cors import CORS
from flask_restful import Api
from Sources.Users import UsersResource

app = Flask(__name__)
CORS(app)
api = Api(app)


api.add_resource(UsersResource, "/users")


@app.get("/test")
def test_route():
    return "Hello World 123"
