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
    static create = async (req,res)=>{
        const newUser = new User(req.body.user)
        const response = await newUser.encryptPassword()
        console.log(newUser);
        res.send(newUser)
        return
        EmployeeController.findByID(req,{send:response=>{
            if(req.length !== 0)
            newUser.create(response=>res.send(response),error=>res.next(error))
            else res.send(response)
        }})
    }
    static update = (req,res,next)=>{
        const updateUser = new User(req.body.user)
        updateUser.update(response=>res.send(response),error=>next(error))
    }
}