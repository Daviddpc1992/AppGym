var express = require('express');
var router = express.Router();

/* GET clientes listing. */
router.get('/', function(req, res, next) {
  res.send('Area clientes');
});


router.get('/new', function(req, res, next) {
  res.send('Nuevo cliente');
});

router.post('/create', function(req, res, next) {
  res.send('Cliente creado');
});

router.get('/edit', function(req, res, next) {
  res.send('Cliente editado');
});

router.post('/update', function(req, res, next) {
  res.send('Cliente subido');
});

router.get('/delete', function(req, res, next) {
  res.send('Cliente Borrado');
});
module.exports = router;
