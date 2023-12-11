// routes/myRouter.js
const express = require('express');
const router = express.Router();
const peliculaController = require('../controllers/myController');

router.post('/crearpeliculas', peliculaController.crearPeliculas);

//ruta para leer todas las peliculas de terror
router.get('/peliculas/terror', peliculaController.obtenerPeliculasDeTerror);

router.delete('/terror', peliculaController.eliminarPeliculasDeTerror);

module.exports = router;
