const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => { // request respone
  res.send('EM XIN CHÀO ANH TRẦN TIẾN')
})

app.listen(port, () => { // sự kiện lắng nghe
  console.log(`Example app listening on port ${port}`)
})