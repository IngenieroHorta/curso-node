
const { crearArchivo } = require('./helpers/multiplicar');
const { argv } = require('./yargs/yargs-config');
const colors = require('colors');
console.clear();
//consumir informacion desde la consola --base
//o ejecutar comando base3
// const [, , arg3 = 'base=4'] = process.argv;
// const [ , base = 5 ]= arg3.split('=')


crearArchivo(argv.b,argv.l,argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));

// console.log(colors.blue.underline(argv));
