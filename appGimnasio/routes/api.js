const router = require('express').Router();

const apliClientesRouter = require('./api/clientes');

router.use('/clientes', apliClientesRouter);



module.exports = router;