const postList = require('../public/data/postsList')

//index
const index = (req, res) => {
    res.send('Homepage dei post');
};

//show
const show = (req, res) => {
    res.send(`show del post ${req.params.id}`);
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
    res.send(`destroy del post ${req.params.id}`);
};

//exporting
module.exports = {index, show, store, update, modify, destroy}