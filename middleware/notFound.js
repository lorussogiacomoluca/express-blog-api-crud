const notFound = function(req, res, next){
    //Set status
    res.status(404)
    
    //Generate error json object
    res.json({
        error: `Pagina non trovata`,
        message: `Nessuna pagina trovata`
    })
}