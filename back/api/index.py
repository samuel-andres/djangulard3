import algoliasearch_django as algoliasearch

from .models import Auto, Color, Marca, Modelo

# indexo cada modelo a algolia 
algoliasearch.register(Auto)
algoliasearch.register(Marca)
algoliasearch.register(Modelo)
algoliasearch.register(Color)
