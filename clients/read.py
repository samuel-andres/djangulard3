import json
from webbrowser import get

import requests

pk = input("--ENTER para obtener la lista de todos los autos\npk>")

if pk:
    pk = pk + "/"

endpoint = f"http://localhost:8000/api/autos/read/{pk}"

print(f"--Obteniendo datos de {endpoint}")

data = {}

get_response = requests.get(endpoint, json=data)

print("status_code", get_response.status_code)

print(json.dumps(get_response.json(), indent=4))
