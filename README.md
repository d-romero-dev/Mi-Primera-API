# API: para llevar la gestión de nuestras tareas diarias.

Para trabajar con este proyecto deberás realizar lo siguiente:
1- Abre la terminal y ejecuta el comando `npm install`, el cual instalará todas las dependencias del proyecto. Sin este paso no podrás trabajar.
2- A continuación ejecuta el comando `npm run dev`, el cual inicia el servidor en "modo desarrollo" utilizando nodemon.
3- Ya puedes comenzar a trabajar en app.js.

-Solicitudes HTTP:
GET: http://localhost:3000/people  ->Obtiene todos los datos.

GET ESPECIFICO: http://localhost:3000/people/"Insertar aqui el id deseado, sin comillas"   RESULTADO->Obtiene los datos de un id especifico.

POST: http://localhost:3000/people/

Sintaxis para realizar una solicitud Post (Utilizando Postman: Body-raw-JSON):
{
  "NAME": "NuevoNombre",
  "lastname": "NuevoApellido",
  "DESCRIPTION": "Nueva descripcion",
  "created_at": "2023-11-23 03:00:00", // Formato DATETIME: YYYY-MM-DD HH:MM:SS
  "updated_at": "2023-11-23 03:00:00", // Formato DATETIME: YYYY-MM-DD HH:MM:SS
  "status": "todo okey"
}

PUT: http://localhost:3000/people/"Insertar aqui el id que se desea modificar, sin comillas"    RESULTADO-> Actualiza/Modifica los datos de un id especifico.

DELETE: http://localhost:3000/people/"Insertar aqui el id que se desea eliminar, sin comillas" RESULTADO-> Elimina todos los datos de un id especifico.
