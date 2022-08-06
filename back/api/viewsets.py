from rest_framework import viewsets

from .models import Auto, Color, Marca, Modelo
from .serializers import (
    AutoSerializer,
    ColorSerializer,
    MarcaSerializer,
    ModeloSerializer,
)


class AutoViewSet(viewsets.ModelViewSet):
    '''Viewsst que recibe solicitudes GET, POST, PUT, PATCH y DELETE y devuelve los datos del modelo auto
    en formato json según lo definido en el serializer correspondiente.'''
    queryset = Auto.objects.all()
    serializer_class = AutoSerializer


class MarcaViewSet(viewsets.ModelViewSet):
    '''Viewsst que recibe solicitudes GET, POST, PUT, PATCH y DELETE y devuelve los datos del modelo marca
    en formato json según lo definido en el serializer correspondiente.'''
    queryset = Marca.objects.all()
    serializer_class = MarcaSerializer


class ModeloViewSet(viewsets.ModelViewSet):
    '''Viewsst que recibe solicitudes GET, POST, PUT, PATCH y DELETE y devuelve los datos del modelo modelo
    en formato json según lo definido en el serializer correspondiente.'''
    queryset = Modelo.objects.all()
    serializer_class = ModeloSerializer


class ColorViewSet(viewsets.ModelViewSet):
    '''Viewsst que recibe solicitudes GET, POST, PUT, PATCH y DELETE y devuelve los datos del modelo color
    en formato json según lo definido en el serializer correspondiente.'''
    queryset = Color.objects.all()
    serializer_class = ColorSerializer
