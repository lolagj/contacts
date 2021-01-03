const app=require('./server.js');
const dbConnect = require('./db');


var port= (process.env.PORT || 3000); //puerto donde va a estar escuchando nuestro servidor web

console.log("Starting API server at "+port);

//llamamos a la función para lanzar conexión
//Nos devuelve una promesa y sobre ella actuams. si funciona bien --> hacemos listen server ready, en el segundo caso de la promesa tenemos el caso de que
//haya error --> lo mostramos por consola
dbConnect().then(
    () =>{
        app.listen(port);
        console.log("Server ready!"); //otro log para ver por consola
    },
    err =>{
        console.log("Connection error: "+err);
    }

)

