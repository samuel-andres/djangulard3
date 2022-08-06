class CaseInsensitiveCapitalizedMixin:
    def get_prep_value(self, value):
        return str(value).capitalize()

    def to_python(self, value):
        value = super().to_python(value)
        if isinstance(value, str):
            return value.capitalize()
        return value


class CaseInsensitiveUppercasedMixin:
    def get_prep_value(self, value):
        return str(value).upper()

    def to_python(self, value):
        value = super().to_python(value)
        if isinstance(value, str):
            return value.upper()
        return value
