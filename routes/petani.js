const router = require('express').Router()
const petaniController = require('../controller/petani')

router.post('/insert', (req,res) => {
    petaniController.create(req.body)
        .then(result => res.json(result))
        .catch(err => res.json(err))
})

router.get('/getAll', (req,res) => {
    petaniController.getAll(req.body)
        .then(result => res.json(result))
        .catch(err => res.json(err))
})

router.get('/getbyid/:id', (req, res) => {
    petaniController.getById(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.put('/update/:id', (req, res) => {
    petaniController.update(req.params.id, req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.put('/delete/:id', (req, res) => {
    petaniController.delete(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

module.exports = router