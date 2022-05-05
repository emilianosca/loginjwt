const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

const app = express();

// seteamos el motor de busqueda
app.set('view engine', 'ejs');

// seteamos la carpeta public para archivos estáticos
app.use(express.static('public'));

// para procesar datos enviados desde forms
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// seteamos las variables de entorno
dotenv.config({path:'./env/.env'});

// para poder trabajar con la cookies
app.use(cookieParser());

// llamamos al router
app.use('/',require('./routes/router'));

// para eliminar el cache y que no se pueda volver con el boton de back luego de que hacemos el LOGOUT
app.use((req, res, next)=>{
    if(!req.user){
        res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    }
    next();
});

app.listen(3000, ()=>{
    console.log('SERVER UP running in http://localhost:3000');
});


// new added

const path = require('path');
const morgan = require('morgan');
const mysql2 = require('mysql2')
const myConnection = require('express-myconnection');


// importing routes
const customers = require('./routes/customers.js');
const { urlencoded } = require('express');
// const userRoutes = require('./routes/users');
 

// settings
app.set('port', (process.env.PORT || 3000));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql2, {
    host: '127.0.0.1',
    user: 'root',
    password: 'qwerty1234',
    port: 3306,
    database: 'iepam'
}, 'single'));
app.use(express.urlencoded({ extended: false })); // para que funcione el formulario


app.use('/', customers);
app.use(express.static(path.join(__dirname, 'public')));
