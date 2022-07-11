const argv = require('yargs')
.option('b',{
    alias:'base',
    type: 'number',
    demandOption: true
})
.option('h',{
    alias:'hasta',
    type: 'number',
    demandOption: true
})
.check((argv,options)=>{
    if (isNaN(argv.b)) {
        throw 'La base tiene que ser un numero';
    }
    return true;
})
.option('l',{
    alias:"listar",
    type:'boolean',
    default:false,
    demandOption:false
})
.argv;

module.exports = {argv};