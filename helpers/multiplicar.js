
const fs = require('fs');
const crearArchivo = async (base = 2) => {

    try {
        let result = '';
        let num = 10;

        let name = `tabla del ${base}.txt`;
        for (let i = 1; i <= num; i++) {
            result += `${base} X ${i}= ${base * i}\n`
        }
        // fs.writeFile(name, result, (err) => {
        //     if (err) throw err;
        //     return `tabla-${base}.txt`;
        // })
        fs.writeFileSync(name, result);
        return `tabla-${base}.txt`;
        
    } catch (error) {
        throw error;
    }


}

module.exports = {
    crearArchivo
}

