const mysql = require('mysql2');
const router = require('../routes/router');

const conexion = mysql.createConnection({
    multipleStatements: true,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE
},'single');


conexion.connect(err => {
    if (err) {
        console.error('error connecting: ' + err);
        return;
    }

    console.log('connected to MySQL database');
});

module.exports = conexion;



// -- creating database
// CREATE DATABASE iepam;

// -- using the database
// use iepam;

// -- creating table
// CREATE TABLE usuario (
//     id_usuario INT(6) UNSIGNED AUTO_INCREMENT,
//     nombre VARCHAR(50) NOT NULL,
//     correo VARCHAR(100) NOT NULL,
//     contrasena VARCHAR(100) NOT NULL,
//     rol VARCHAR(150) NOT NULL,
//     foto VARCHAR(200) NOT NULL,
//     PRIMARY KEY (id_usuario)
// );

// CREATE TABLE curso (
//     id_curso INT(6) UNSIGNED AUTO_INCREMENT,
//     id_usuario INT(6) UNSIGNED NOT NULL,
//     nombre VARCHAR(50) NOT NULL,
//     num_lecciones INT(6) NOT NULL,
//     imagen VARCHAR(200) NOT NULL,
//     PRIMARY KEY (id_curso),
//     FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
// );

// CREATE TABLE leccion (
//     id_leccion INT(6) UNSIGNED AUTO_INCREMENT,
//     id_curso INT(6) UNSIGNED NOT NULL,
//     nombre VARCHAR(50) NOT NULL,
//     tiempo_minutos INT(6) NOT NULL,
//     num_leccion INT(6) NOT NULL,
//     archivo_url VARCHAR(200) NOT NULL,
//     PRIMARY KEY (id_leccion),
//     FOREIGN KEY (id_curso) REFERENCES curso(id_curso)
// );

// CREATE TABLE comentario (
//     id_comentario INT(6) UNSIGNED AUTO_INCREMENT,
//     id_usuario INT(6) UNSIGNED NOT NULL,
//     id_leccion INT(6) UNSIGNED NOT NULL,
//     comentario VARCHAR(300) NOT NULL,
//     PRIMARY KEY (id_comentario),
//     FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario),
//     FOREIGN KEY (id_leccion) REFERENCES leccion(id_leccion)
// );

// CREATE TABLE avance (
//     id_avance INT(6) UNSIGNED AUTO_INCREMENT,
//     id_usuario INT(6) UNSIGNED NOT NULL,
//     id_leccion INT(6) UNSIGNED NOT NULL,
//     PRIMARY KEY (id_avance),
//     FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario),
//     FOREIGN KEY (id_leccion) REFERENCES leccion(id_leccion)
// );


// -- to show all tables
// SHOW TABLES;

// -- to describe table
// DESCRIBE usuario;