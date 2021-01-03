const mongoose = require('mongoose'); //cargamos moongose

//Declaramos el esquema de contactos
const contactSchema = new mongoose.Schema({
    name: String,
    phone: Number
});

//metodo para la clase contact. De limpieza. Lo que queremos devolver sobre contact
//util para no devolver la contraseña al hacer un get de cliente por ejemplo
contactSchema.methods.cleanup = function(){
    return {name:this.name, phone:this.phone};
}

//Creamos la clase contacto
const Contact = moongoose.model('Contact', contactSchema);

//lo exportamos
module.exports = Contact;