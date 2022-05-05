const conexion = require('../database/db');

console.log("---- get into customerController.js  ---- ")

// test archive
const controller = {};

controller.list = (req, res) => {
  // req.getConnection((err, conn) => {
  //   conn.query('SELECT * FROM curso', (err, customers) => {
  //    if (err) {
  //     res.json(err);
  //    }
  //    res.render('customers', {
  //       data: customers
  //    });
  //   });
  // });
 
    res.send('hello world');
 
};

controller.save = (req, res) => {
  console.log("Connected to save!");
  const nombre = req.body.nombre;
  const imagen = req.body.imagen;
  
  // const data = req.body;
  console.log("this is req.body " + req);
  
  conexion.query('INSERT INTO curso set ?',{ id_usuario:2, nombre:nombre, num_lecciones:0, imagen:imagen, descripcion:""}, (err, result)=>{
    
    console.log("this is data -> " + nombre)
    console.log("this is imagen -> " + imagen)
    res.redirect('/');
});
     
    
  
  // res.send('hello world into add');
};


controller.edit = (req, res) => {

// ---- 
// console.log("Connected to save!");
// const nombre = req.body.nombre;
// const imagen = req.body.imagen;

// // const data = req.body;
// console.log("this is req.body " + req);

// conexion.query('INSERT INTO curso set ?',{ id_usuario:2, nombre:nombre, num_lecciones:0, imagen:imagen}, (err, result)=>{
  
//   console.log("this is data -> " + nombre)
//   console.log("this is imagen -> " + imagen)
//   res.redirect('/');

// ---
console.log(" ");
console.log("---- Connected to edit! ---- ");

  // const { id } = req.body;
  // req.getConnection((err, conn) => {
  //   conn.query("SELECT * FROM curso WHERE id = ?", [id], (err, rows) => {
  //     res.render('customers_edit', {
  //       data: rows[0]
  //     })
  //   });
  // });
  res.send('hello world into edit');
};

controller.update = (req, res) => {
  // const { id } = req.params;
  // const newCustomer = req.body;
  // req.getConnection((err, conn) => {

  // conn.query('INSERT INTO curso id_usuario=1 ,nombre=Rodo,num_lecciones=10,imagen="https://s3-us-west-2.amazonaws.com/devcodepro/media/tutorials/instalacion-de-nodejs-en-ubuntu-t1.jpg";', [newCustomer, id], (err, rows) => {
  //   res.redirect('/');
  // });
  // });
  res.send('hello world update');
};

controller.delete = (req, res) => {

  console.log(" ")
  console.log("--------- Connected to delete! ---------- ");
  console.log(" ")

  const {id_curso} = req.params;
  console.log("this is id -> " + id_curso);
  conexion.query('DELETE FROM curso WHERE id_curso = ?',[id_curso], (err, result)=>{
    res.redirect('/');
  });
}

module.exports = controller; 