from django.urls import include, path

from . import routers, views

urlpatterns = [
    path("search/", views.SearchListView.as_view(), name="search"), #api externa
    path("", include(routers), name="crud"), # api interna
]
