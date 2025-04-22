//import express
const express = require('express')

//Create a new route
const router = express.Router()

//import post array
const postList = require('../public/data/postsList')

//import controller
const postController = require('../controllers/postController')


//index
router.get('/', postController.index)

//show
router.get('/:id', postController.show)

//store
router.post('/', postController.store)

//update
router.put('/:id', postController.update)

//modify
router.patch('/:id', postController.modify)

//destroy
router.delete('/:id', postController.destroy)

//Export router
module.exports = router