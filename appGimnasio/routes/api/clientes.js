const router = require('express').Router();
const {
    getAll,
    create,
    getById,
    getByAge,
    deleteById
    
} = require('../../models/cliente.model')


router.get('/', async (req, res) => {
    // Funcion con promesas then y catch
    // clienteModel.getAll()
    //     .then((rows) => {
    //         res.json(rows);
    //     })
    //     .catch((err) => {
    //         res.json({ error: 'HAY UN ERROR FATAL'})
    //     });

    // Función con PROMESAS - async await

    try {
        const rows = await getAll();
        res.json(rows)
    } catch {
        res.json({
            error: 'HAY UN ERROR FATAL'
        })
    }

});


router.get('/:clienteId', async (req, res) => {
    const cliente = await getById(req.params.clienteId)
    try {
        if (cliente) {
            res.json(cliente)
        } else {
            res.json({
                message: 'El ID no es correcto'
            })
        }
    } catch (error) {
        res.json({
            error: 'Se ha escacharrao esto'
        })
    }
});

router.get('/mayor/:clienteEdad', async (req, res) => {
    const clienteMayor = await getByAge(req.params.clienteEdad)
    try {
        if (clienteMayor) {
            res.json(clienteMayor)
        } else {
            res.json({
                message: 'La edad indicada no corresponde a ningun usuario'
            })
        }
    } catch (error) {
        res.json({
            error: 'Se ha escacharrao esto'
        })
    }
})




router.post('/', async (req, res) => {
    create(req.body)
        .then(result => {
            res.json(result)
        })
        .catch((error) => {
            console.log(error)
        });



})


router.delete('/:clienteId', async(req, res) => {
    const result = await deleteById(req.params.clienteId)
     res.json(result)

})

module.exports = router;