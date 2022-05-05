const router = require('express').Router();

console.log("----- get into customers.js -----  ")

const customerController = require('../controllers/customerController');

router.get('/', customerController.list);
router.post('/add', customerController.save);
router.get('/update', customerController.edit);
router.post('update', customerController.update);
router.get('/delete', customerController.delete);


module.exports = router;
