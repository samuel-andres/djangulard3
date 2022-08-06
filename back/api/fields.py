from django.db.models import CharField

from .mixins import CaseInsensitiveCapitalizedMixin, CaseInsensitiveUppercasedMixin


class CaseInsensitiveCapitalizedCharField(CaseInsensitiveCapitalizedMixin, CharField):
    ''' field/validator que sumariza/hereda la funcionalidad de CharField y del Mixin custom
    CaseInsensitiveCapitalizedMixin'''
    def __init__(self, *args, **kwargs):
        super(CaseInsensitiveCapitalizedMixin, self).__init__(*args, **kwargs)


class CaseInsensitiveUppercasedCharField(CaseInsensitiveUppercasedMixin, CharField):
    ''' field/validator que sumariza/hereda la funcionalidad de CharField y del Mixin custom
    CaseInsensitiveUppercasedMixin'''
    def __init__(self, *args, **kwargs):
        super(CaseInsensitiveUppercasedMixin, self).__init__(*args, **kwargs)
