const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERS,
    port:3306,
    pass: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

//Vamos a probar si la conexion fue exitosa o no, adicionalmente, exportamos el modulo conexion
connection.connect((err)=>{
    if(err){
        console.log("El error de coneción a DB es:" + err)
        return;
    }
    console.log("Conectado exitosamente a la DB");
});

module.exports = connection;