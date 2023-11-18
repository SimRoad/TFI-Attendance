import databaseConn from '../../database.config.js'
import DaySession from '../models/daySession.model.js'

export default class DaySessionController{
    static getAll = (req,res)=>{
        DaySession.getAll(results=>res.send(results))
    }
    static getColumnFields = (req,res)=>{
        DaySession.getFields(fields=>res.send(fields))
    }
}