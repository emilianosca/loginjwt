const conexion = require('../database/db');

console.log("---- get into customerController.js  ---- ")

// test archive
const controller = {};

controller.list = (req, res) => {
  
    conexion.query('SELECT * FROM curso', (err, curso) => {
     if (err) {
      res.json(err);
     }
     res.render('curso', {
        data: curso
     });
    });
  
    // res.send('hello world');
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
  console.log(" ");
  console.log("---- Connected to edit! ---- ");

  const {nombre} = req.params;
  const {id_curso} = req.params;
  const {imagen} = req.params;
  console.log("this is imagen -> " + imagen);

  console.log(" this is nombre -> " + nombre + " this is imagen -> " + imagen + " this is id_curso -> " + id_curso); 

  res.render('customers_edit', {
    data: id_curso,
    title: nombre, 
    imagen: imagen,
   });

  
};

controller.update = (req, res) => {
  const { id } = req.params;
  const newCustomer = req.body;

  console.log("this is id -> " + id + " and this is newCustomer -> " + newCustomer); 

  conexion.query('UPDATE curso set ? where id = ?', [newCustomer, id], (err, rows) => {
  
    res.redirect('/');

  });
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