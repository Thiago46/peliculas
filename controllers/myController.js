// controllers/peliculaController.js
const Pelicula = require('../models/myModel');

const crearPeliculas = async (req, res) => {
    try {
      // Array con 10 documentos de ejemplo
      const peliculasEjemplo = [
        { titulo: 'Pelicula 1', genero: 'Aventura' },
        { titulo: 'Pelicula 2', genero: 'Comedia' },
        { titulo: 'Pelicula 3', genero: 'Drama' },
        { titulo: 'Pelicula 4', genero: 'Acción' },
        { titulo: 'Pelicula 5', genero: 'Ciencia Ficción' },
        { titulo: 'Pelicula 6', genero: 'Romance' },
        { titulo: 'Pelicula 7', genero: 'Suspense' },
        { titulo: 'Pelicula 8', genero: 'Fantasía' },
        { titulo: 'Pelicula 9', genero: 'Misterio' },
        { titulo: 'Pelicula 10', genero: 'Terror' },
      ];
      // routes/myRouter.js
      // controllers/peliculaController.
      console.log('Se ejecutó el controlador de películas');

  
      // Crear las películas en la base de datos
      const peliculasCreadas = await Pelicula.create(peliculasEjemplo);
  
      // Mostrar información en la consola
      console.log('Peliculas creadas:', peliculasCreadas);
  
      // Enviar un mensaje de éxito como respuesta
      res.status(201).json({ mensaje: 'Películas creadas con éxito.' });
    } catch (error) {
      console.error('Error al crear películas:', error);
      res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
  };
  

const obtenerPeliculasDeTerror = async (req, res) => {
  try {
    // Realizar la consulta a la base de datos
    const peliculasDeTerror = await Pelicula.find({ genero: 'terror' });

    // Mostrar información en la consola
    console.log('Peliculas de terror encontradas:', peliculasDeTerror);


    // Enviar la lista de películas de terror como respuesta
    res.status(200).json(peliculasDeTerror);
  } catch (error) {
    console.error('Error al obtener películas de terror:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};


module.exports = {
  obtenerPeliculasDeTerror,
  crearPeliculas,
};
