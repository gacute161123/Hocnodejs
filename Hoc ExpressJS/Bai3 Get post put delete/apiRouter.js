const express = require('express');
var router = express.Router() 

// phần router cũng có thể dùng middlawe như app  router.use..., viết liền lại 
// router nhóm lại những đường dẫn để chúng ta dễ quản lý
router.get('/', (req, res) => {
 
    res.json('router 1 user Get')
})
router.post('/', (req, res) => {
    //    res.json('router 1 user Post : '+ )
    res.json('router 1 user Post : '+ req.body.username + " " + req.headers.phu)
})
router.put('/', (req, res) => {
    res.json('router 1 user Put')
})
router.delete('/', (req, res) => {
    res.json('router 1 user Delete')
})

module.exports = router