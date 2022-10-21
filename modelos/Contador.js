const mongoose = require(`mongoose`);

let ContadorSchema = new mongoose.Schema({
    idContador: Number,
    Nombres_admin: String,
    Apellidos_admin: String,
    Documento_admin: String,
    Email_admin: String,
    Celular_admin: String,
    Clave_admin: String,
    
});

module.exports = mongoose.model(`Contador`, ContadorSchema,`Contadores`);