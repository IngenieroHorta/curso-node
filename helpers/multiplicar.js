
const fs = require('fs');
const colors = require('colors');
const crearArchivo = async (base = 2, listar = false, hasta = 10) => {

    try {
        let result, consola = '';
        // let num = 10;

        let name = `tabla del ${base}.txt`;
        for (let i = 1; i <= hasta; i++) {
            result += `${base} X ${i} = ${base * i}\n`;
            consola += `${base} ${'X'.yellow} ${i} ${'='.blue} ${base * i}\n`;

        }
        // fs.writeFile(name, result, (err) => {
        //     if (err) throw err;
        //     return `tabla-${base}.txt`;
        // })
        if (listar) {
            console.log("=====================".green);
            console.log("tabla del: ".green, colors.blue(base));
            console.log("=====================".green);

            console.log(consola);
        }


        fs.writeFileSync(`./salida/${name}`, result);
        return `tabla-${base}.txt`;

    } catch (error) {
        throw error;
    }


}

module.exports = {
    crearArchivo
}

