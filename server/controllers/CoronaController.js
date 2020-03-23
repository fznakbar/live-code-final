const Model = require('../models')
const User = Model.User
const Country = Model.Country
const Report = Model.Report
const jwt = require('jsonwebtoken')
require('dotenv').config()

class CoronaController {
    static login(req, res, next){
        let username = req.body.username
        let password = req.body.password
        if(username && password){
            User.findOne({
                where : 
                    {
                    username : username, 
                    password:password
                    }
            })
            .then(data =>{
                if(data){
                    let token = jwt.sign({ id: data.id, username: data.username}, process.env.SECRET)
                    res.status(200).json({token : token, id:data.id, username : data.username})
                } else {
                    next({
                        status:400,
                        msg : 'Wrong Email or Password'
                    })
                }
            })
            .catch(err =>{
                next(err)
            })
        } 
        else {
            next ({
                status : 400,
                msg : 'Username or Password cannot be empty'
            })
        }
    }

    static getAll(req, res, next){
        Country.findAll()
        .then(data=>{
            res.status(200).json(data)
        })
        .catch(err=>[
            next(err)
        ])
    }

    static getReports(req, res, next){
        Report.findAll()
        .then(data=>{
            res.status(200).json(data)
        })
        .catch(err=>{
            next(err)
        })
    }

    static addReport(req, res, next){
        let cases = req.body.cases
        let userId = req.userData.id
        let countryId = req.body.CountryId
        let oldCases = null
        let reportId = null
        Country.findOne({where : {id : countryId}})
        .then(data=>{
            if(data){
                oldCases = data.cases
                let obj = {
                    cases : cases,
                    UserId : userId,
                    CountryId : countryId
                }
                return Report.create(obj)
            } else {
                next({
                    status : 404,
                    msg : 'Country is not registered yet'
                })
            }
        })
        .then(result=>{
            reportId = result.id
            let obj = {
                cases : result.cases + oldCases
            }
            return Country.update(obj, {where : {id : countryId}})
        })
        .then(result=>{
            return Report.findOne({where : {id : reportId}, include : [{model : Country}]})
        })
        .then(dataReport =>[
            res.status(201).json(dataReport)
        ])
        .catch(err=>{
            next(err)
        })
    }
}

module.exports = CoronaController