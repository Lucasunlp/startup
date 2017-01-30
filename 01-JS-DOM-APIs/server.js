// content of index.js
var http = require("http");  


var manejador = function(solicitud,repuesta){
	console.log("Recibimos una nueva peticion");
	repuesta.end("hola mundo");

};

var servidor= http.createServer(manejador);
servidor.listen(8090);