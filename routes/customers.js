const router = require('express').Router();

console.log("----- get into customers.js -----  ")

const customerController = require('../controllers/customerController');

router.get('/', customerController.list);
router.post('/add', customerController.save);
router.get('/update/:id_curso/:nombre/:imagen', customerController.edit);
router.post('/update/:id_curso', customerController.update);
router.get('/delete/:id_curso', customerController.delete);


module.exports = router;
