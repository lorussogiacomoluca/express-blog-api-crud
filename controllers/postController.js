const postList = require('../public/data/postsList');

//index
const index = (req, res) => {
    res.json(postList);
};

//show
const show = (req, res) => {
    //get ID
    const id = parseInt(req.params.id)
    //Find selected post
    const filtred = postList.find((post) => post.id === id)
    //BONUS: check if post exist and manage respose status
    if(!filtred){
        //set status = 404
        res.status(404).json({
            error: 'Not Found',
            message: 'Post non trovato'
        })
    }
    res.json(filtred)
};

//store
const store = (req, res) => {
    res.send('store del post');
};

//update
const update = (req, res) => {
    res.send(`update del post ${req.params.id}`);
};

//modify
const modify = (req, res) => {
    res.send(`modify del post ${req.params.id}`);
};

//destroy
const destroy = (req, res) => {
    //Get ID from req
    const id = parseInt(req.params.id)
    //Find post in postList
    const filtred = postList.find((post) => post.id === id)
    //BONUS: check if post exist and manage respose status
    if(!filtred){
        //set status = 404
        res.status(404).json({
            error: 'Not Found',
            message: 'Post non trovato'
        })
    }
    //Splice function: deleting selected post
    postList.splice(postList.indexOf(filtred, 1))
    //set status = 204 and send
    res.status(204).send()
    //console.log of postList
    console.log(postList)
};

//exporting
module.exports = {index, show, store, update, modify, destroy}