let name = process.env.Name || 'Sin nombre';

console.log('Hola mundo ' + name);

setInterval(function() {
	console.log('ciclo');
}, 1000);