from rest_framework import serializers

from .models import Auto, Color, Marca, Modelo
from .validators import validate_es_una_patente, validate_unique_field_autos


class MarcaSerializer(serializers.ModelSerializer):
    ''' Serializer del modelo marca que serializa los datos en id, url, nombre y un array de modelos
    con su representación según el dunder method __str__'''
    url = serializers.HyperlinkedIdentityField(
        view_name="marcas-detail", lookup_field="pk", read_only=True
    )

    modelos = serializers.StringRelatedField(many=True, read_only=True)

    class Meta:
        model = Marca
        fields = [
            "id",
            "url",
            "nombre",
            "modelos",
        ]


class ModeloSerializer(serializers.ModelSerializer):
    ''' Serializer del modelo "modelo" (modelo de auto)" que serializa los datos del mismo según
    id, url, nombre, marca(__str__), array de autos y un campo marca_pk que facilita las implementaciones
    de detalle/actualización'''

    url = serializers.HyperlinkedIdentityField(
        view_name="modelos-detail", lookup_field="pk", read_only=True
    )

    autos = serializers.StringRelatedField(
        many=True,
        read_only=True,
    )

    marca = serializers.StringRelatedField(
        read_only=True,
    )

    marca_pk = serializers.PrimaryKeyRelatedField(
        queryset=Marca.objects.all(), source="marca"
    )

    class Meta:
        model = Modelo
        fields = [
            "id",
            "url",
            "nombre",
            "marca",
            "autos",
            "marca_pk",
        ]


class ColorSerializer(serializers.ModelSerializer):
    ''' Serializer del modelo "color" que serializa los datos del mismo según
    id, url y nombre. En este caso no utilicé relaciones (reverse lookups) pq no me pareció relevante 
    navegar desde colores hacia autos'''
    url = serializers.HyperlinkedIdentityField(
        view_name="colores-detail", lookup_field="pk", read_only=True
    )

    class Meta:
        model = Color
        fields = [
            "id",
            "url",
            "nombre",
        ]


class AutoSerializer(serializers.ModelSerializer):
    ''' Serializer del modelo auto que serializa el url y las relaciones con representaciones str
    y pk '''
    url = serializers.HyperlinkedIdentityField(
        view_name="autos-detail", lookup_field="pk", read_only=True
    )
    patente = serializers.CharField(
        validators=[
            validate_es_una_patente,
            validate_unique_field_autos,
        ]
    )

    color_pk = serializers.PrimaryKeyRelatedField(
        queryset=Color.objects.all(), source="color"
    )

    modelo_pk = serializers.PrimaryKeyRelatedField(
        queryset=Modelo.objects.all(), source="modelo"
    )

    modelo = serializers.StringRelatedField(
        read_only=True,
    )

    color = serializers.StringRelatedField(
        read_only=True,
    )

    class Meta:
        model = Auto
        fields = [
            "url",
            "patente",  
            "modelo",
            "color",
            "color_pk",
            "modelo_pk",
        ]
        depth = 5
