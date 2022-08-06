from rest_framework import generics
from rest_framework.response import Response

from .angolia_connector import perform_search


class SearchListView(generics.GenericAPIView):
    '''View que se conecta con la API de angolia pasando como parámetro "q" como query
    y sf como searchfor que defíne el índice, es decir, que modelo se quiere busca '''
    def get(self, request, *args, **kwargs):
        query = request.GET.get("q")
        searchfor = request.GET.get("sf")
        if not query:
            return Response("", status=400)
        results = perform_search(query, searchfor)
        return Response(results)
