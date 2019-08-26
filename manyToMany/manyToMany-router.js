const router = require('express').Router();
const ManyToMany = require('./manyToMany-model');
const { authenticate } = require('../users/restrict-middleware')


router.get('/:id',(req, res) => {
    const { id } = req.params;
    ManyToMany.getManyToMany(id)
        .then(clicked => {
            res.status(200).json(clicked)
        })
        .catch(error => {
            res.status(500).json(error)
        });
});

router.post('/', (req, res) => {

    ManyToMany.addManyToMany(req.body)
        .then(ids => {
            res.status(200).json(ids)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

module.exports = router