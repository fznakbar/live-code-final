const jwt = require('jsonwebtoken')
function authentication (req, res, next){
    let token = req.headers.token
    try{
        let data = jwt.verify(token, process.env.SECRET)
        req.userData = data
        next()
    }
    catch (err) {
        next({
            status : 401
        })
    }
}

module.exports = authentication