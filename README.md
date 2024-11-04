# SWAPI SPANISH - Prueba Softtek

## Endpoints

Se realizaron los siguientes endpoints:

### Get Personas

- **Endpoint**: `/personas`
- **Method**: `GET`
- **Handler**: `dist/main.getPeople`
- **Description**: Devuelve la lista de personas con las keys parseadas al español.

### Get Persona by ID

- **Endpoint**: `/personas/{id}`
- **Method**: `GET`
- **Handler**: `dist/main.getPersonById`
- **Description**: Devuelve la informacion de una persona con las keys parseadas al español.

### Save Persona

- **Endpoint**: `/personas`
- **Method**: `POST`
- **Handler**: `dist/main.savePerson`
- **Description**: Guarda la informacion de una nueva persona

## Deployment

Para realizar el deploy de la aplicacion ejecutar el siguiente comando

```
serverless deploy
```



## Local Development

Para ejecutar la aplicacion en un ambiente local

```
npm run start:dev
```


## Environment Variables


- `MODULE_TABLE`: Nombre de la tabla en la cual se guardaran las personas.
- `DYNAMODB_REGION`: La region donde DynamoDB estara ubicado.
- `DYNAMODB_ARN`: Identificador del recurso AWS.


