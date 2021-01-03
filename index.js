var port= (process.env.PORT || 3000); //puerto donde va a estar escuchando nuestro servidor web
console.log("Starting API server at "+port);


app.listen(port); // le indicamos que lea en el puerto

console.log("Server ready!"); //otro log para ver por consola