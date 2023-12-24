const express = require('express');
var app = express();
var bodyParser = require('body-parser')
const AccountModel = require('./models/account')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// đăng ký
app.post('/register', (req, res, next) => {
    var Username = req.body.username;
    var Password = req.body.password;
    console.log(Username, Password);
    AccountModel.findOne({
        username:Username,
    })
        .then(data => {
            if (data) {
                res.json('User này đã tồn tại')
            }
            else {
                return AccountModel.create({
                username: Username,
                password: Password,
                })
            }
        }) // data dưới sẽ là data trên vì return 
          .then(data => {
        res.json('Tao tai khoan thanh cong')
        })
        .catch(err => {
        res.status(500).json('Tao tai khoan that bai')
    })
})

app.post('/login', (req, res, next) => {
    var Username = req.body.username
    var Password = req.body.password
    
    AccountModel.findOne({
        username: Username,
        password: Password
    })
        .then(data => {
            if (data) {
                res.json('Dang nhap thanh cong')
            }
            else {
                res.status(400).json('Account khong chinh xac')
            }
        })
        .catch(err => {
            res.status(500).json('Co loi ben server')
    })
})
app.get('/', (req, res, next) => {
    res.json('HOME')
})

app.listen(3000, () => {
    console.log(`Server started on port`);
})