from rest_framework import generics
from rest_framework.response import Response

from .angolia_connector import perform_search


class SearchListView(generics.GenericAPIView):
    def get(self, request, *args, **kwargs):
        query = request.GET.get("q")
        searchfor = request.GET.get("sf")
        if not query:
            return Response("", status=400)
        results = perform_search(query, searchfor)
        return Response(results)
