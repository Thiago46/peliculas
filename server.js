const mongoose = require('mongoose');
const app = require('./app');
const dotenv = require('dotenv');

// Carga de variables de entorno
// dotenv.config({ path: "./config.env" });
const DB = 'mongodb+srv://tbbecchi:T46844831b.@clusterpeliclas.rhodrtg.mongodb.net/peliculas';

// Conexión al cloud de Mongodb Atlas
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log('Connected to database');
    })
    .catch((error) => {
      console.error('Error connecting to database:', error);
    });
const port = process.env.PORT || 3000;
// Corremos el servidor en el puerto seleccionado
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port} correctamente`);
});
