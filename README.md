# API: Dedicada a la  Gestión de Tareas Diarias.
---------------------------------------------------------------------------------------------------------------------------
NOTA: Se debe tener instalado MariaDB + HeidiSQL y crear la Base de Datos siguiendo el siguiente codigo para que funcione:
---------------------------------------------------------------------------------------------------------------------------
CREATE TABLE `todo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `description` varchar(50) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `status` varchar(50) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci

-----------------------------------------------------------------------------------------------------------------------------
Para trabajar con este proyecto deberás realizar lo siguiente:
1- Abre la terminal y ejecuta el comando `npm install`, el cual instalará todas las dependencias del proyecto. Sin este paso no podrás trabajar.
2- A continuación ejecuta el comando `npm run dev`, el cual inicia el servidor en "modo desarrollo" utilizando nodemon.
3- Ya puedes comenzar a trabajar en app.js.
------------------------------------------------------------------------------------------------------------------------------
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
Sintaxis para realizar una solicitud PUT (Utilizando Postman: Body-raw-JSON):
{
  "NAME": "NombreActualizado",
  "lastname": "ApelllidoActualizado",
  "DESCRIPTION": "DescripcionActualizada",
  "created_at": "2023-11-23 03:00:00", // Formato DATETIME: YYYY-MM-DD HH:MM:SS
  "updated_at": "2023-11-23 03:00:00", // Formato DATETIME: YYYY-MM-DD HH:MM:SS
  "status": "todo okey"
}

DELETE: http://localhost:3000/people/"Insertar aqui el id que se desea eliminar, sin comillas" RESULTADO-> Elimina todos los datos de un id especifico.
