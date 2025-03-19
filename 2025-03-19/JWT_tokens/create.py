import jwt
import datetime

# Your existing code
secret_key = "secret_key"

payload = {
    "user_id": 11,
    "username": "Hacker",
    "exp": datetime.datetime.now(datetime.UTC) + datetime.timedelta(days=1)
}

token = jwt.encode(payload, secret_key,algorithm='HS256')
print("Username: Hacker ||",token)

#Bob's Signature = Du1YAqIuhWK4JC9wtQ0zlJon0dpNXikKEeCT0kdY5TU