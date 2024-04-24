const express = require('express');
const app = express();

// Endpoint GET
app.get('/saludo', (req, res) => {
  res.send('¡Hola desde tu API en Node.js!');
});

// Endpoint POST
app.post('/mensaje', (req, res) => {
  res.send('Mensaje recibido correctamente.');
});

// Iniciar el servidor
const puerto = 3000; // Puedes cambiar este puerto si lo deseas
app.listen(puerto, () => {
  console.log(`Servidor API escuchando en el puerto ${puerto}`);
});
