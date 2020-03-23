function errorHandler(err, req, res, next){
    if(err.status === 400){
        res.status(err.status).json(err.msg)
    } else if(err.status === 401){
        res.status(err.status).json('Invalid Token')
    } else if(err.status === 403){
        res.status(err.status).json('Forbidden')
    }else {
        console.log(err)
        res.status(500).json(err)
    }
}

module.exports = errorHandler