# Sistema de administración de autos

## Tecnologías utilizadas:

- Django con DRF para crear la RESTfull API
- Postgres para la base de datos
- Angular para el front

## Demo

![Alt Text](readme.dia/front.gif)

## Endpoints de la API

| **Path**         | **Método** | **Acción**     |
|------------------|------------|----------------|
| /api/autos       | GET        | Listar autos   |
| /api/autos       | POST       | Registrar auto |
| /api/autos/{pk}/ | GET        | Detalle auto   |
| /api/autos/{pk}/ | PUT        | Editar auto    |
| /api/autos/{pk}/ | PATCH      | Editar auto    |
| /api/autos/{pk}/ | DELETE     | Eliminar auto  |
| /api/modelos       | GET        | Listar modelos   |
| /api/modelos       | POST       | Registrar modelo |
| /api/modelos/{pk}/ | GET        | Detalle modelo   |
| /api/modelos/{pk}/ | PUT        | Editar modelo    |
| /api/modelos/{pk}/ | PATCH      | Editar modelo    |
| /api/modelos/{pk}/ | DELETE     | Eliminar modelo  |
| /api/marcas       | GET        | Listar marcas   |
| /api/marcas       | POST       | Registrar marca |
| /api/marcas/{pk}/ | GET        | Detalle marca   |
| /api/marcas/{pk}/ | PUT        | Editar marca    |
| /api/marcas/{pk}/ | PATCH      | Editar marca    |
| /api/marcas/{pk}/ | DELETE     | Eliminar marca  |
| /api/colores       | GET        | Listar colores   |
| /api/colores       | POST       | Registrar color |
| /api/colores/{pk}/ | GET        | Detalle color   |
| /api/colores/{pk}/ | PUT        | Editar color    |
| /api/colores/{pk}/ | PATCH      | Editar color    |
| /api/colores/{pk}/ | DELETE     | Eliminar color  |

# ERD
![Alt Text](readme.dia/erd.png)