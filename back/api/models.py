from django.db import models
from django.urls import reverse

from .fields import (CaseInsensitiveCapitalizedCharField,
                     CaseInsensitiveUppercasedCharField)


class Marca(models.Model):
    nombre = CaseInsensitiveCapitalizedCharField(max_length=120, unique=True)

    def __str__(self) -> str:
        return f"{self.nombre}"


class Modelo(models.Model):
    nombre = CaseInsensitiveCapitalizedCharField(max_length=120, unique=True)
    marca = models.ForeignKey(
        Marca, on_delete=models.SET_NULL, null=True, related_name="modelos"
    )

    def __str__(self) -> str:
        return f"{self.marca} {self.nombre}"


class Color(models.Model):
    nombre = CaseInsensitiveCapitalizedCharField(max_length=120, unique=True)

    def __str__(self) -> str:
        return f"{self.nombre}"


class Auto(models.Model):
    patente = CaseInsensitiveUppercasedCharField(max_length=9, unique=True)
    modelo = models.ForeignKey(
        Modelo, on_delete=models.CASCADE, null=True, related_name="autos"
    )
    color = models.ForeignKey(Color, on_delete=models.SET_NULL, null=True)

    def __str__(self) -> str:
        return f"{self.patente}"
