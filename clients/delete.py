import json
from webbrowser import get

import requests

pk = input("pk>")

if pk:
    pk = pk + "/"

endpoint = f"http://localhost:8000/api/autos/delete/{pk}"

confirm = input(f"--Está seguro que desea eliminar el auto con pk = {pk[:-1]}? Y/n")

if confirm != "n":
    get_response = requests.delete(
        endpoint,
    )

    stcode = get_response.status_code
    if stcode == 204:
        print(f"{stcode} - Auto eliminado con éxito.")
