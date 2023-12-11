//Modelo de ejemplo para alojar datos en una DB mongo
const mongoose = require("mongoose");

//Creación del Schema Post
const peliculaSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
    },
    genero:{
        type: String,
        required: true,
    }
    
});

//Creación del modelo Post
const Pelicula = mongoose.model("Pelicula", peliculaSchema);

module.exports = Pelicula;
