import databaseConn from '../../database.config.js'
import User from '../models/user.model.js'

export default class UserController{
    static findAll = (req, res)=>{
        User.getAll(results=>res.send(results))
    }
    static getColumnNames = (req,res)=>{
        User.getFields(fields=>res.send(fields))
        User.getFields(fields=>console.log(fields))
    }
}