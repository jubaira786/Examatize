from flask_restful import Resource
from Core.Middleware import is_teacher, get_identity
class UsersResource(Resource):
    @is_teacher()
    def get(self):
        try:
            return "This is a get method of UserResources"
        except Exception as e:
            return f"Error:{e}"
            

    def post(self):
        return "This is a post method of UserResources"
