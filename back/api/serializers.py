from rest_framework import serializers

from .models import Auto, Color, Marca, Modelo
from .validators import validate_es_una_patente, validate_unique_field_autos


class MarcaSerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(
        view_name="marcas-detail", lookup_field="pk", read_only=True
    )

    modelos = serializers.HyperlinkedRelatedField(
        many=True, read_only=True, view_name="modelos-detail"
    )

    class Meta:
        model = Marca
        fields = [
            'id',
            "url",
            "nombre",
            "modelos",
        ]


class ModeloSerializer(serializers.ModelSerializer):

    url = serializers.HyperlinkedIdentityField(
        view_name="modelos-detail", lookup_field="pk", read_only=True
    )

    autos = serializers.StringRelatedField(
        many=True,
        read_only=True,
        # view_name="autos-detail",
    )

    marca = serializers.StringRelatedField(
        read_only=True,
    )

    marca_pk = serializers.PrimaryKeyRelatedField(
        queryset=Marca.objects.all(), source="marca")

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
    url = serializers.HyperlinkedIdentityField(
        view_name="autos-detail", lookup_field="pk", read_only=True
    )
    patente = serializers.CharField(
        validators=[
            validate_es_una_patente,
            validate_unique_field_autos,
        ]
    )

    # color_pk = serializers.PrimaryKeyRelatedField(
    #     queryset=Color.objects.all(), source="color", write_only=True
    # )

    color_pk = serializers.PrimaryKeyRelatedField(
        queryset=Color.objects.all(), source="color")

    modelo_pk = serializers.PrimaryKeyRelatedField(
        queryset=Modelo.objects.all(), source="modelo")

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
            "patente",  # read and write
            "modelo",
            "color",
            # write only
            "color_pk",
            "modelo_pk",
        ]
        depth = 5
