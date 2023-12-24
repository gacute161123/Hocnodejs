const express = require('express');
var router = express.Router();
const AccountModel= require('../models/account')

// Lấy dữ liệu từ database
router.get('/', (req, res, next) => {
    AccountModel.find({})
        .then(data => {
            res.json(data)
        })
        .catch(err => {
        res.status(500).json('Loi server')
        })
})
// lấy dữ liệu theo id
router.get('/:id', (req, res, next) => {
    var _id = req.params.id
    AccountModel.findById({_id})
        .then(data => {
            res.json(data)
        })
        .catch(err => {
        res.status(500).json('Loi server')
        })
})


// Thêm mới dữ liệu vào db
router.post('/', (req, res, next) => { 
    var Username = req.body.username
    var Password= req.body.password
    
    AccountModel.create({
        username: Username,
        password: Password,
    })
        .then(data => {
        res.json('Them account thanh cong')
        })
        .catch(err => {
        res.status(500).json('Loi server')
    })
})
// Cập nhập dữ liệu trong db // doi mat khau
router.put('/:id', (req, res, next) => {
    var _id = req.params.id
    var NewPassword = req.body.newPassword
    AccountModel.findByIdAndUpdate(_id, {
        password: NewPassword
    }) 
        .then(data => {
            res.json('Update thanh cong nhe')
        })
        .catch(err => {
            res.status(500).json('Loi server')
    })
})

// Xóa dữ liệu trong db
router.delete('/:id', (req, res, next) => {
    var id=req.params.id
    AccountModel.deleteOne({
        _id:id
    })
        .then(data => {
        res.json('Xoa thanh cong')
        })
        .catch(err => {
        res.status(500).json('Loi server')
    })
})




module.exports= router