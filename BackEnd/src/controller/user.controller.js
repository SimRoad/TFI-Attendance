import User from '../models/user.model.js'
import EmployeeController from './employee.controller.js'

export default class UserController{
    static findAll = (req, res)=>{
        User.getAll(results=>res.send(results))
    }
    static getColumnNames = (req,res)=>{
        User.getFields(fields=>res.send(fields))
    }
    static findbyID = (req,res)=>{
        User.getID(req.params.id,result=>res.send(result))
    }
    static create = (req,res)=>{
        // if(compareFields(Object.keys(req.query),User.fields)){
        //     User.create(req.query,response=>res.send(response))
        // }
        const newUser = new User(req.body.user)
        EmployeeController.findByID(req,{send:response=>{
            if(req.length !== 0)
            newUser.create(response=>res.send(response),error=>res.next(error))
            else res.status(404).send(response)
        }})
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