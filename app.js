
const { crearArchivo } = require('./helpers/multiplicar');
console.clear();
//consumir informacion desde la consola --base
const [, , arg3 = 'base=4'] = process.argv;

const [ , base = 5 ]= arg3.split('=')


crearArchivo(base)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));

    