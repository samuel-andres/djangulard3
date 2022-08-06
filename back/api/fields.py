from django.db.models import CharField

from .mixins import (CaseInsensitiveCapitalizedMixin,
                     CaseInsensitiveUppercasedMixin)


class CaseInsensitiveCapitalizedCharField(CaseInsensitiveCapitalizedMixin, CharField):
    def __init__(self, *args, **kwargs):
        super(CaseInsensitiveCapitalizedMixin, self).__init__(*args, **kwargs)


class CaseInsensitiveUppercasedCharField(CaseInsensitiveUppercasedMixin, CharField):
    def __init__(self, *args, **kwargs):
        super(CaseInsensitiveUppercasedMixin, self).__init__(*args, **kwargs)
