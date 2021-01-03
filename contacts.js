const mongoose = require('mongoose'); //cargamos moongose

//Declaramos el esquema de contactos
const contactSchema = new mongoose.Schema({
    name: String,
    phone: Number
});

//Creamos la clase contacto
const Contact = moongoose.model('Contact', contactSchema);

//lo exportamos
module.exports = Contact;