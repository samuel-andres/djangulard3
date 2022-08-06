import re

from rest_framework import serializers, validators

from .models import Auto


def validate_es_una_patente(value):
    ''' Valida que la patente sea del formato LLLNNN o LLNNNLL y raisea el mensaje de error
    correspondiente si esto no se cumple'''
    patenteVieja = re.compile("[A-Za-z]{3}[\d]{3}")
    patenteNueva = re.compile("[A-Za-z]{2}[\d]{3}[A-Za-z]{2}")
    if not (patenteVieja.search(value) or patenteNueva.search(value)):
        raise serializers.ValidationError("La patente tiene que ser LLLNNN o LLNNNLL")
    return value

# validator utilizado para verificar que algún campo del modelo auto sea único, lo utilicé para validar
# la unicidad de la patente
validate_unique_field_autos = validators.UniqueValidator(queryset=Auto.objects.all())
