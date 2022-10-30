const express = require('express')
const app = express()
app.get('/', (req, res)=>{
    res.send('Hello API')
})
app.listen(3012, (req, res)=>{
    res.send('API STARRT')
})