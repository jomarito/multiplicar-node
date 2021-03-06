const fs = require('fs');



let crearArchivo = (base) => {

    return new Promise((resolve, reject) => {

        let data = '';



        if (!Number(base)) {
            reject(`La base no es un número`);
            return;
        }


        for (let i = 1; i <= 10; i++) {

            data += `${base} * ${i}= ${base*i}\n`
        }

        fs.writeFile(`./tablas/tabla-${base}.txt`, data, (err) => {

            if (err) reject(err);
            else
                resolve(`tabla-${base}.txt`);
        })
    })


}








module.exports = {

    crearArchivo: crearArchivo
}