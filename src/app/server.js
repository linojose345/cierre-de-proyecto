require('dotenv').config();

//traer modulos.
const express = require('express');
const path = require('path');
const session = require('express-session');
const bcryptjs = require('bcryptjs');
//conexión a la base de datos
const connection = require('./db')

//Enrutador, el que se encarga de las rutas
const indexRouter = require("./routes/index")

const app = express(); //Iniciación del servidor

// Configuraciones:

app.use(function (req, res, next) {
    req.con = connection
    next()
})

// configurar el puerto
app.set('port', process.env.PORT || 4003 );
//configurar la ruta donde estan alojadas las vistas
app.set('views',path.join(__dirname,'./views'));
//configurar el gesto de plantillas
app.set('view engine', 'ejs');

//middlewares(para recibir facilmente la informacion de los fomurlarios)
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//Configurar la ruta donde estan alojados los elementos del css (public)
app.use('/resources',express.static(path.join(__dirname, '../public')));


app.use('/', indexRouter);


//Configurar el manejo de sesiones dentro de la aplicacion
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))

module.exports = app;
