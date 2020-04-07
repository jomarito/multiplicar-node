const multiplicar = require('./multiplicar/multiplicar.js');
const argv = require('yargs').argv;

let base = process.argv[2];
base = base.split('=')[1];

console.log(base);
multiplicar.crearArchivo(base).then(archivo => console.log(`Se ha creado ${archivo}`)).catch(err => console.log(err));