// CREA servidor HTTP
// var http = require ('http'); //Importa el modulo HTTP solicitado

// http.createServer(function(req, res) { // crea el servidor http
//     res.writeHead(200, {'Content-Type': 'text/html'}); // establece tipo de contenido
//     res.end(' chanchito feliz '); // escribe contenido
// }).listen(7000); // escucha en el puerto 7000

// console.log('Servidor ejemplo_1 corriendo en http://localhost:7000'); // para correrlo npm start en consola


const express = require ('express'); //Importa funcion exprress
const app = express (); //crea instancia express

//GET/
app.get('/', (req, res) => {    //request & response respectivamente
  res.send('Hello LitlePig!')   //mensaje de salida
})

// Configura el puerto 

app.listen(7000);    //escucha puerto 7000
  console.log(`Example app listening on port 7000`);

// Ejecutar comando npm start
