var express= require ('express'); //es la forma de cargar la librería. Cuando vayamos a usarla, cogemos la variable express donde está cargada
var bodyParser = require('body-parser'); //módulo body parser --> para leer el cuerpo de las request
const Contact=require('./contacts'); //en contacts ya está la llamanda a mongoose

var BASE_API_PATH = "/api/v1";// base para todas nuestras apis

var app=express(); //inicializamos el servidor web

app.use(bodyParser.json()); //así ya nos puede leer el cuerpo

app.get("/", (req,res)=>{ //lo que recibe/envia cuando se accede al nodo raíz: path /
    res.send("<html><body><h1>Rafi Mungula </h1></body></html>"); //lo que enviamos en nuestra respuesta
});

app.get(BASE_API_PATH +"/contacts", (req,res) =>{
    console.log(Date() + " - GET /contacts");
    
    Contact.find({}, (err, contats) =>{ //nos devuelven obejtos de tipo contacts
        if(err){
            console.log(Date() + " - "+ err);
            res.sendStatus(500);
        }else{
            res.send(contats.map((contact)=>{
                return contact.cleanup(); 
            }));
        }
    }); //así nos devuelve todos los elementos de la bbdd, porque no hemos indicado nada en la consulta
    
});



app.post(BASE_API_PATH+ "/contacts", (req,res)=>{
    console.log(Date()+ " - POST /contacts");
    var contact= req.body; //le decimos que el nuevo contacto que vamos a crear viene en el body
    //codigo de validación, se hará en el futuro
    Contact.create(contact, (err)=>{
        if(err){
            console.log(Date() + " - " +err);
            res.sendStatus(500);
        }else{
            res.sendStatus(201); //codigo de status --> Revisar!

        }
    });
});

module.exports =app;