const mongoose = require(`mongoose`);

let PropietarioSchema = new mongoose.Schema({
    idPropietario: Number,
    Nombres_propietario: String,
    Apellidos_propietario: String,
    Documento_propietario: String,
    Email_propietario: String,
    Celular_propietario: String,
    Clave_propietario: String,
    
});

module.exports = mongoose.model(`Propietario`, PropietarioSchema,`Propietarios`);