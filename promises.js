function hola(nombre) {
	return new Promise(function(resolve,reject){
		setTimeout(function() {
			console.log('hola, ' + nombre);
			resolve(nombre);
		},1500);
	});
}

function adios(nombre) {
	return new Promise(function(resolve,reject){
		setTimeout(function() {
			console.log('adios, ' + nombre);
			resolve(nombre);
		},1000);
	});
}

function mistake() {
	return new Promise(function(resolve,reject){
		reject("Un error");
	});
}


console.log('Inicicando el proceso');
hola('Carlos')
.then(adios)

.then(mistake)
.then(
	(nombre)=> {
		console.log('termiando el proceso');
	})
.catch(error => {
	console.error(error);
})