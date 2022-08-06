from rest_framework import routers

from .viewsets import AutoViewSet, ColorViewSet, MarcaViewSet, ModeloViewSet

# en este router se registran los cuatro viewsets con las convenciones de url definidas en la documentación
router = routers.DefaultRouter()

router.register(
    prefix="autos",
    viewset=AutoViewSet,
    basename="autos",
)

router.register(
    prefix="marcas",
    viewset=MarcaViewSet,
    basename="marcas",
)

router.register(
    prefix="modelos",
    viewset=ModeloViewSet,
    basename="modelos",
)

router.register(
    prefix="colores",
    viewset=ColorViewSet,
    basename="colores",
)

urlpatterns = router.urls
