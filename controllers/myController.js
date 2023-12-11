// controllers/peliculaController.js
const Pelicula = require('../models/myModel');

const crearPeliculas = async (req, res) => {
  try {
    const peliculasEjemplo = [
      { titulo: 'El Conjuro', genero: 'Terror' },
      { titulo: 'Anabelle', genero: 'Terror' },
      { titulo: 'Hablame', genero: 'Terror' },
      { titulo: 'Saw X: El juego del miedo', genero: 'Terror' },
      { titulo: 'La Noche del Demonio', genero: 'Terror' },
      { titulo: 'La Monja', genero: 'Terror' },
      { titulo: 'Resident Evil', genero: 'Terror' },
      { titulo: 'Un Lugar en Silencio', genero: 'Terror' },
      { titulo: 'No Respires', genero: 'Terror' },
      { titulo: 'Terrifier', genero: 'Terror' },
    ];

    const peliculasCreadas = await Pelicula.create(peliculasEjemplo);

    console.log('Peliculas creadas:', peliculasCreadas);
  
    res.status(201).json({ mensaje: 'Películas creadas con éxito.' });
  } catch (error) {
    console.error('Error al crear películas:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};

const obtenerPeliculasDeTerror = async (req, res) => {
  try {
    const peliculasDeTerror = await Pelicula.find({ genero: 'Terror' });

    console.log('Peliculas de terror encontradas:', peliculasDeTerror);

    res.status(200).json(peliculasDeTerror);
  } catch (error) {
    console.error('Error al obtener películas de terror:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};

const eliminarPeliculasDeTerror = async (req, res) => {
  try {
    const resultado = await Pelicula.deleteMany({ genero: 'Terror' });

    console.log(`${resultado.deletedCount} películas de terror eliminadas`);

    res.status(200).json({ mensaje: 'Películas de terror eliminadas con éxito.' });
  } catch (error) {
    console.error('Error al eliminar películas de terror:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};

module.exports = {
  obtenerPeliculasDeTerror,
  crearPeliculas,
  eliminarPeliculasDeTerror,
};

