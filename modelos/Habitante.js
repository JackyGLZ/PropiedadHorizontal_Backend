const mongoose = require(`mongoose`);

let PropietarioSchema = new mongoose.Schema({
    idHabitante: Number,
    Nombres_habitante: String,
    Apellidos_habitante: String,
    Documento_habitante: String,
    Email_habitante: String,
    Celular_habitante: String,
    Clave_habitante: String,
    
});

module.exports = mongoose.model(`Habitante`, HabitanteSchema,`Habitantes`);