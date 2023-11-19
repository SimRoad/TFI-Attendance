import databaseConn from '../../database.config.js'
import Logs from '../models/Logs.model.js'
import UserController from './user.controller.js'

export default class LogsController{
    static getAll = (req,res)=>{
        Logs.getAll(Results=>res.send(Results))
    }
    static getFieldNames = (req,res)=>{
        Logs.getFields(fields=>res.send(fields))
    }
    static create = (req,res,next)=>{
        const newLogs = new Logs(req.body.logs)
        req.params.id = req.body.logs.generatedBy
        UserController.findbyID(req,{send:response=>{
            if(response.length !== 0)
            newLogs.create(response=>res.send(response),error=>next(error))
            else res.status(404).send(response)
        }})
    }
    static update = (req,res,next)=>{
        const updateLogs = new Logs(req.body.logs)
        updateLogs.update(response=>res.send(response),error=>next(error))
    }
}