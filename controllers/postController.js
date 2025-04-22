//index
const index = (req, res) => {
    res.send('Homepage dei post');
};

//show
const show = (req, res) => {
    res.send('show del post');
};

//store
const store = (req, res) => {
    res.send('store del post');
};

//update
const update = (req, res) => {
    res.send('update dei post');
};

//modify
const modify = (req, res) => {
    res.send('modify del post');
};

//destroy
const destroy = (req, res) => {
    res.send('destroy del post');
};

//exporting
module.exports = {index, show, store, update, modify, destroy}