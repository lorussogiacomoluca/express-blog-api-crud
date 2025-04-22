const postList = require('../public/data/postsList');

//index
const index = (req, res) => {
    res.json(postList);
};

//show
const show = (req, res) => {
    const id = parseInt(req.params.id)
    const filtred = postList.find((post) => post.id === id)
    if(!filtred){
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
    
    const id = parseInt(req.params.id)
    const filtred = postList.find((post) => post.id === id)
    if(!filtred){
        res.status(404).json({
            error: 'Not Found',
            message: 'Post non trovato'
        })
    }
    postList.splice(postList.indexOf(filtred, 1))
    res.status(204)
};

//exporting
module.exports = {index, show, store, update, modify, destroy}