const express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.json('routẻr 1 admin ')
})
router.get('/product', (req, res) => {
    res.json('router product admin ')
})
router.get('/cart', (req, res) => {
    res.json('router cart admin ')
})
router.get('/:id', (req, res) => {
    res.json('router admin với id : ' + req.params.id)
})
module.exports = router