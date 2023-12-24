const express = require('express');
var router = express.Router() 

// phần router cũng có thể dùng middlawe như app  router.use..., viết liền lại 
// router nhóm lại những đường dẫn để chúng ta dễ quản lý
router.get('/', (req, res) => {
    res.json('router 1 user')
},('/product', (req, res)=>{
    res.json("router 1 product")
}),('/cart', (req, res) => {
    res.json('router 1 cart')
})
)

// nó sẽ ăn đường dẫn viết sơm nhất nên tốt nhất để get id về sau 
router.get('/:id', (req, res) => {
    res.json('router 1 user have id : ' + req.params.id)
})
module.exports = router