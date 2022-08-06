import json

import requests

endpoint = "http://localhost:8000/api/autos/"
método = "post"

print(f"--ENDPOINT: {endpoint}\n--METHOD: {método}")

data = {}

data["modelo_pk"] = input("modelo>")
data["color_pk"] = input("color>")
data["patente"] = input("patente>")

get_response = requests.post(endpoint, json=data)

print(get_response.json())
print("status_code", get_response.status_code)

print(json.dumps(get_response.json(), indent=4))
