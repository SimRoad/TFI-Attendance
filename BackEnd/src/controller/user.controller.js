import databaseConn from '../../database.config.js'
import User from '../models/user.model.js'

export default class UserController{
    static findAll = (req, res)=>{
        User.getAll(results=>res.send(results))
    }
    static getColumnNames = (req,res)=>{
        User.getFields(fields=>res.send(fields))
    }
    static create = (req,res)=>{
        if(compareFields(Object.keys(req.query),User.fields)){
            User.create(req.query,response=>res.send(response))
        }
    }
    static update = (req,res,next)=>{
        const updateUser = new User(req.body.user)
        updateUser.update(response=>res.send(response),error=>next(error))
    }
}

function compareFields(first,second){
    second.splice(0)
    return first.length === second.length && first.every((elem,index)=>elem === second[index])
}