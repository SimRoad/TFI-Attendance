import databaseConn from '../../database.config.js'
import DaySession from '../models/daySession.model.js'
import Employee from '../models/employee.model.js'
import EmployeeController from './employee.controller.js'

export default class DaySessionController{
    static getAll = (req,res)=>{
        DaySession.getAll(results=>res.send(results))
    }
    static getColumnFields = (req,res)=>{
        DaySession.getFields(fields=>res.send(fields))
    }
    static create = (req,res,next)=>{
        const newDaySession = new DaySession(req.body.daySession)
        newDaySession.create(response=>res.send(response),error=>next(error))
    }
    static update = (req,res,next)=>{
        const updateDaySession = new DaySession(req.body.daySession)
        updateDaySession.update(response=>res.send(response),error=>next(error))
    }
}

