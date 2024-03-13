import redis
import os
from dotenv import load_dotenv
load_dotenv()

REDIS_HOST = os.environ.get("redis_loacalhost")
REDIS_PORT = os.environ.get("redis_port")

r_conn = redis.Redis(host=REDIS_HOST, port=REDIS_PORT)
