import databaseConn from '../../database.config.js'
import Logs from '../models/Logs.model.js'

export default class LogsController{
    static getAll = (req,res)=>{
        Logs.getAll(Results=>res.send(Results))
    }
    static getFieldNames = (req,res)=>{
        Logs.getFields(fields=>res.send(fields))
    }
    static create = (req,res,next)=>{
        const newLogs = new Logs(req.body.logs)
        newLogs.create(response=>res.send(response),error=>next(error))
    }
    static update = (req,res,next)=>{
        const updateLogs = new Logs(req.body.logs)
        updateLogs.update(response=>res.send(response),error=>next(error))
    }
}