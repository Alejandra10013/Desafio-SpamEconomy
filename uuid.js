const {v4: uuidv4} = require("uuid");
const fs = require("fs");

//generando id con uuid
let id = uuidv4().slice(-6);

//almacenando archivo con id unico x cada correo
let escribeArchivo = (data, texto) => {
    fs.writeFile("correos/correo_id_" + id, texto, "utf8", () => {
        console.log(`Archivo para el correo_id_${id} creado con exito.`);
    });
}

// let escribeArchivo = (data, texto) => {     fs.write(
// `correos/correo_id${id}`,         `Correos: ${correos}\nAsunto:
// ${asunto}\nContenido:\n${texto}`,         "utf8",         () => {
// console.log(`Archivo para el correo_id_${id} creado con exito.`);         });
// }

module.exports = escribeArchivo;