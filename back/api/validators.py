import re

from rest_framework import serializers, validators

from .models import Auto


def validate_es_una_patente(value):
    patenteVieja = re.compile("[A-Za-z]{3}[\d]{3}")
    patenteNueva = re.compile("[A-Za-z]{2}[\d]{3}[A-Za-z]{2}")
    if not (patenteVieja.search(value) or patenteNueva.search(value)):
        raise serializers.ValidationError("La patente tiene que ser LLLNNN o LLNNNLL")
    return value


validate_unique_field_autos = validators.UniqueValidator(queryset=Auto.objects.all())
