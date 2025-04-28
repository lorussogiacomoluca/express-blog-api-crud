const errorHandler = function(err, req, res, next){
    //Set status
    res.status(500)

    //Generate message with json object
    res.json({
        error: err.message
    })

}

//Define module.exports
module.exports = errorHandler