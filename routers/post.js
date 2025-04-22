//import express
const express = require('express')

//Create a new route
const router = express.Router()

//import post array
const postList = require('../public/data/postsList')

//import controller
const postController = require('../controllers/postController')


//index
router.get('/', (req, res) =>{
    res.json(postList)
})




//show
router.get('/:id', (req, res)=>{
    const id = parseInt(req.params.id)
    const filtred = postList.find((post) => post.id === id)
    res.json(filtred)
})

//store
router.post('/', (req, res)=>{
    res.send('Inserimento di un nuovo post effettuato')
})

//update
router.put('/:id', (req, res)=>{
    res.send(`Modifica totale del post con id ${req.params.id}`)
} )

//modify
router.patch('/:id', (req, res)=>{
    res.send(`Modifica parziale del post con id ${req.params.id}`)
} )

//destroy
router.delete('/:id', (req, res)=>{
    res.send(`Eliminazione del post con id ${req.params.id}`)
} )

//Export router
module.exports = router