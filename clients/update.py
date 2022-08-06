import json
from webbrowser import get

import requests

pk = input("pk>")

if pk:
    pk = pk + "/"
if not pk:
    quit()
endpoint = f"http://localhost:8000/api/autos/{pk}"

print(endpoint)

data = {}

marca = input("marca>")
if marca:
    data["marca"] = marca

modelo = input("modelo>")
if modelo:
    data["modelo"] = modelo

color = input("color>")
if color:
    data["color"] = color

patente = input("patente>")
if patente:
    data["patente"] = patente

get_response = requests.patch(endpoint, json=data)

print("status_code", get_response.status_code)

print(json.dumps(get_response.json(), indent=4))
