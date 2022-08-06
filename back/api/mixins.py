class CaseInsensitiveCapitalizedMixin:
    '''Mixin que capitaliza los strings'''
    def get_prep_value(self, value):
        return str(value).capitalize()

    def to_python(self, value):
        value = super().to_python(value)
        if isinstance(value, str):
            return value.capitalize()
        return value


class CaseInsensitiveUppercasedMixin:
    ''' Mixin que pasa los strings a mayúsculas'''
    def get_prep_value(self, value):
        return str(value).upper()

    def to_python(self, value):
        value = super().to_python(value)
        if isinstance(value, str):
            return value.upper()
        return value
