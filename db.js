const mongoose= require('mongoose');
//conexión a la bbdd. damos la conexión por defecto: (podemos poner ahí localhost en vez de mongo, pero en nuestro caso es más cómodo poner mongo)
const DB_URL=(process.env.MONGO_URL || 'mongodb://mongo/test');
const dbConnect= function(){
    const db=moongose.connection; //objeto mongoose de conexión
    db.on('error', console.error.bind(console, 'connection error: ')); //sist para gestión de errores
    return mongoose.connect(DB_URL,{useNewUrlParser:true}); //parámetro que realmente realiza la ocnexión y es lo que devolvemos. 
    //userNewUrlParser --> nos lo pide la librería mongo db

}

module.exports =dbConnect; //Exportamos la función. o getsionamos en index.js

/* ESTO ERA PARA NEDB
var DataStore = require('nedb');
var DB_FILE_NAME = __dirname + "/contacts.jason";

//Inicializamos nuestra bbdd

var db = new DataStore({
    filename: DB_FILE_NAME,
    autoload:true
});

module.exports= db; 
*/
