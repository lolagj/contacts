var express= require ('express'); //es la forma de cargar la librería. Cuando vayamos a usarla, cogemos la variable express donde está cargada
var bodyParser = require('body-parser'); //módulo body parser --> para leer el cuerpo de las request

var port= 3000; //puerto donde va a estar escuchando nuestro servidor web
var BASE_API_PATH = "/api/v1";// base para todas nuestras apis

//Como ahora mismo no vamos a tener la info almacenada en un servidor, lo que vamos a hacer es crear un array de contactos

var contacts = [
    {"name": "Rafi", "phone":"12345"},
    {"name":"lola", "phone": "789654"}
];

console.log("Starting API server...")

var app=express(); //inicializamos el servidor web

app.use(bodyParser.json()); //así ya nos puede leer el cuerpo

app.get("/", (req,res)=>{ //lo que recibe/envia cuando se accede al nodo raíz: path /
    res.send("<html><body><h1>Rafi Mungula </h1></body></html>"); //lo que enviamos en nuestra respuesta
});

app.get(BASE_API_PATH +"/contacts", (req,res) =>{
    console.log(Date() + " - GET /contacts");
    res.send(contacts);
});

app.post(BASE_API_PATH+ "/contacts", (req,res)=>{
    console.log(Date()+ " - POST /contacts");
    var contact= req.body; //le decimos que el nuevo contacto que vamos a crear viene en el body
    //codigo de validación, se hará en el futuro
    contacts.push(contact); //añadimos a nuestro array el nuevo contacto creado
    res.sendStatus(201); //codigo de status --> Revisar!
});




app.listen(port); // le indicamos que lea en el puerto

console.log("Server ready!"); //otro log para ver por consola