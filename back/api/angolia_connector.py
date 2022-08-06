from algoliasearch_django import algolia_engine


def get_client():
    return algolia_engine.client


def get_index(index_name="Auto"):
    client = get_client()
    index = client.init_index(index_name)
    return index


def perform_search(query, searchfor, **kwargs):
    if searchfor:
        searchfor = searchfor.capitalize()
        index = get_index(index_name=searchfor)
    if not searchfor:
        index = get_index()
    results = index.search(query)
    return results
