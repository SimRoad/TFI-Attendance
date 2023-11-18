import databaseConn from '../../database.config.js'
import Logs from '../models/Logs.model.js'

export default class LogsController{
    static getAll = (req,res)=>{
        Logs.getAll(Results=>res.send(Results))
    }
    static getFieldNames = (req,res)=>{
        Logs.getFields(fields=>res.send(fields))
    }
}