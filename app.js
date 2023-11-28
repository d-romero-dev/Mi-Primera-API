const express = require("express"); 
const mariadb = require('mariadb');

const pool = mariadb.createPool({host: "localhost", user: "root", password: "1234", database:"planning", connectionLimit: 5});
const app = express(); 

const port = 3000;
app.use(express.json()); 



app.get("/", (req, res) => {
  
  res.send("<h1>Bienvenid@ al Servidor!</h1><p>Autor: <a href='https://github.com/d-romero-dev'>https://github.com/d-romero-dev</a></p>");
});

// Solicitud GET para obtener todos los registros de la base de datos.

app.get("/people", async (req, res) => {
  let conn;
  try {

	conn = await pool.getConnection();
  console.log("Conexión a la base de datos exitosa");
	const rows = await conn.query("SELECT id, NAME, lastname, DESCRIPTION, created_at, updated_at, status FROM todo;");

  res.json(rows);

  } catch(error){
    res.status(500).json({message:"ERROR: El Servidor falló"});
  }finally {
	if (conn) conn.release();
  }
  
});

//Solicitud GET para obtener los datos segun un id especifico.

app.get("/people/:id", async (req, res) => {
 
  let conn;
  try {

	conn = await pool.getConnection();
  console.log("Conexión a la base de datos exitosa");
	const rows = await conn.query("SELECT id, NAME, lastname, DESCRIPTION, created_at, updated_at, status FROM todo WHERE id=?",[req.params.id]);

  res.json(rows[0]);

  } catch(error){
    res.status(500).json({message:"ERROR: El Servidor falló"});
  }finally {
	if (conn) conn.release();
  }
});


//Solicitud POST para agregar registros a la base de datos.

app.post("/people", async (req, res) => {
  let conn;
  try {
    conn = await pool.getConnection();
    console.log("Conexión a la base de datos exitosa");

    const response = await conn.query(
      `INSERT INTO todo (NAME, lastname, DESCRIPTION, created_at, updated_at, status) VALUES (?, ?, ?, ?, ?, ?)`,
      [req.body.NAME, req.body.lastname, req.body.DESCRIPTION, req.body.created_at, req.body.updated_at, req.body.status]
    );

    res.json({ message:"Elemento Creado: Solicitud POST realizada con ÉXITO", data_POSTED:{id: parseInt(response.insertId), ...req.body }});
  } catch (error) {
    console.error("Error en el servidor:", error);
    res.status(500).json({ message: "ERROR: El Servidor falló" });
  } finally {
    if (conn) conn.release();
  }
});


app.put("/people/:id", async(req, res) => {

  let conn;
  try {
    conn = await pool.getConnection();
    console.log("Conexión a la base de datos exitosa");

    const response = await conn.query(
      `UPDATE todo SET NAME=?, lastname=?, DESCRIPTION=?, created_at=?, updated_at=?, status=? WHERE id=?`,
      [req.body.NAME, req.body.lastname, req.body.DESCRIPTION, req.body.created_at, req.body.updated_at, req.body.status, req.params.id]
    );

    res.json({ 
      message: "Elemento Actualizado: Solicitud PUT realizada con ÉXITO",
      data_UPDATED: {
        id: parseInt(response.insertId),
        ...req.body
      }
    });
  } catch (error) {
    console.error("Error en el servidor:", error);
    res.status(500).json({ message: "ERROR: El Servidor falló" });
  } finally {
    if (conn) conn.release(); // release to pool
  }
  

});

app.delete("/people/:id", async (req, res) => {

  let conn;
  try {
    conn = await pool.getConnection();
    console.log("Conexión a la base de datos exitosa");

    const response = await conn.query(
      `DELETE FROM todo WHERE id=?`,
      [req.params.id]
    );

    res.json({ 
      message: "Elemento Eliminado: Solicitud DELETE realizada con ÉXITO",
      
      data_DELETED: {
        id: parseInt(response.insertId),
        ...req.body
      }
    });
  } catch (error) {
    console.error("Error en el servidor:", error);
    res.status(500).json({ message: "ERROR: El Servidor falló" });
  } finally {
    if (conn) conn.release(); // release to pool
  }


});


app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
