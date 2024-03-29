// Require de Express
const express = require('express');

// Require de FS
const fs = require('fs');

// Ejecución de Express
const app = express();

// Levantando el Servidor en el puerto 3030
app.listen(3030, () => console.log('Server running in 3030 port'));

// Leyendo y parseando (en array) el contenido de heroes.json
const heroes = JSON.parse(fs.readFileSync(__dirname + '/data/heroes.json', 'utf-8'));

// Ruta Raíz / ➝ Home
app.get('/', function (req, res) {
         res.send('Ni Superman, Iron Man o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne y hueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan como inspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en ti');


});	

// Ruta /heroes ➝ se envía todo el array y Express lo parsea para el browser como JSON :D
app.get('/heroes', function (req, res) {
	res.send(heroes);
});

// Ruta /heroes/n ➝ se envía el nombre y profesión del héroe solicitado
app.get('/heroes/detalle/:id', function (req, res) {
	// Acá lo primero será encontrar al héroe que corresponda
	let heroeid = req.params.id; 
	let cheroes = heroes.length;
	let nombreh = "";
	let profesionh = "";
	let controlh = false;
	for (i = 0 ; i < cheroes ; i ++) {
      
		let ingresar = heroes[i];
		
			if (ingresar.id == heroeid){ ;
		    nombreh = ingresar.nombre;
	        profesionh = ingresar.profesion;
			 
		    }
	        else {
				
			}
	}  
	
	if(nombreh == ""){
	//res.send('Hola, mi nombre es ' + nombreh + ' y soy ' + profesionh);
	res.send("No encontrado");
   }
	else {
		res.send('Hola, mi nombre es ' + nombreh + ' y soy ' + profesionh);
		
	}
	// Si se encuentra al héroe se envía el nombre y su profesión
	// Si NO se encuentra se envía el mensaje de no encontrado
});

// Ruta /heroes/n/bio ➝ se envía la bio del héroe solicitado
app.get('/heroes/bio/:id/:ok?', function (req, res) {
	// Acá lo primero será encontrar al héroe que corresponda
	let heroeid = req.params.id; 
	let ok = req.params.ok;
	//let tok = typeof ok;
	// Si NO se encuentra al héroe se envía un mensaje
	
	if( ok === undefined) {
		res.send("hola mundo");
	}else {
		res.send("okkkkk");
	}
	
	// Si se encuentra al héroe:
		// Se pregunta si vino el parámetro Y el valor esperado y se envía la información
		// Si nó vino el parámetro se envía el mensaje de error
	
    

	
});
/*
// Ruta Créditos
// ¿?

// Ruta... ¿Pára qué sirve esto?
app.get('*', (req, res) => {
	res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
});
*/