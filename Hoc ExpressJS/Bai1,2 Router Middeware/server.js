var express = require('express');
var app = express();
// gửi yêu cầu đến file apirouter
var router1 = require('./apiRouter.js')
var router2 = require('./apiRouter2.js')

// middleware
var checkadmin=((req, res, next) => {
    req.data.role
    next()
})
var checkdangnhap=((req, res, next) => {
    if (dangnhaproi) {
       req.data=user
        next()
    }
    else{
        res.json('bạn chưa đăng nhập')
    }
    //res.json('Home')
})


app.get('/',checkdangnhap,(req, res, next) => {
   res.json('Dữ liệu')
    //res.json('Home')
})


app.use('/admin/api/',checkdangnhap,checkadmin,router1)
// app.use('/api1/', router1)
// localhost:3000/api1/

app.listen(5000, () => {
    console.log(`Server started on port`);
})