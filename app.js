//Import Express
const express = require('express')

//inizialize express app
const app = express()

//app port
const port = 3000

app.get('/', (req,res)=>{
    res.send('Il mio blog')
})

app.listen(port, ()=>{
    console.log(`In ascolto su porta ${port}`)
})