const postList = require('../public/data/postsList');

//IDGenerator Function
const genID = () =>{
    return postList[postList.length -1].id +1
}

//index
const index = (req, res) => {
    const tag = req.query.tag
    let filtredList = postList
    if(tag){
        filtredList = postList.filter((post) => post.tags.includes(tag))
    }
    res.json(filtredList)
    
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
    //res.send('store del post');

    //Create newID
    const newID = genID();

    //Destructuring body request
    const {title, content, image, tags} = req.body

    //Create newPost object
    const newPost = {
        //fixed
        title,
        content,
        image,
        tags
    }
    
    //Push new post in postList
    postList.push(newPost)
    console.log(postList)
    
    //Set Status 201 and send new postList in json
    res.status(201)
    res.json(postList)
};

//update
const update = (req, res) => {
    //res.send(`update del post ${req.params.id}`);

    //Save id 
    const id = parseInt(req.params.id)

    //Find post by ID
    const post = postList.find((post) => post.id === id)

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