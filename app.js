//Import Express
const express = require('express')

//inizialize express app
const app = express()

//app port
const port = 3000

//Body parsing: json
app.use(express.json())

//Define public asset folder
app.use(express.static('public'))

//import post router
const postRouter = require('./routers/post.js')

//connect the post router to /post url
app.use('/post', postRouter)

app.get('/', (req,res)=>{
    res.send('Il mio blog')
})

app.listen(port, ()=>{
    console.log(`In ascolto su porta ${port}`)
})