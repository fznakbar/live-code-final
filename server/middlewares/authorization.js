const Model = require('../models')
const Report = Model.Report
function authorization (req, res, next){
    let id = req.params.id
    let userId = req.userData.id
    Report.findOne({where : {id : id}})
    .then(data=>{
        if(data.UserId === userId){
            next()
        } else {
            next({
                status : 403
            })
        }
    })
    .catch(err=>{
        next(err)
    })
}

module.exports = authorization