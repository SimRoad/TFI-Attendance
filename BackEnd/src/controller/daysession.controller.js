import databaseConn from '../../database.config.js'
import DaySession from '../models/daySession.model.js'
import Employee from '../models/employee.model.js'
import EmployeeController from './employee.controller.js'

export default class DaySessionController{
    static getAllSync = (req,res)=>{
        DaySession.getAll(results=>res.send(results))
    }
    static getColumnFieldsSync = (req,res)=>{
        DaySession.getFields(fields=>res.send(fields))
    }
    static findbyIDSync = (req,res)=>{
        DaySession.getID(req.params.id,result=>res.send(result))
    }
    static createSync = (req,res,next)=>{
        const newDaySession = new DaySession(req.body.daySession)
        req.params.id = req.body.daySession.employeeID
        EmployeeController.findByID(req,{send:response=>{
            console.log(response)
            if(response.length !== 0)
            newDaySession.create(response=>res.send(response),error=>next(error))
            else res.send(response)
        }})
    }
    static updateSync = (req,res,next)=>{
        const updateDaySession = new DaySession(req.body.daySession)
        updateDaySession.update(response=>res.send(response),error=>next(error))
    }
    
    static async findAll(req,res,next){
        res.send(await DaySession.getAll().catch(err=>next(err)))
    }
    static async findByID(req,res){
        res.send(await DaySession.getID(req.params.id).catch(err=>next(err)))
    }
    static async getColumnFieldNames(req,res){
        res.send(await DaySession.getFields().catch(err=>next(err)))
    }
    static async create(req,res,next){
        const newDaySession = new DaySession(req.body.daySession)
        res.send(await newDaySession.create().catch(err=>next(err)))
    }
    static async update(req,res,next){
        try {
            if(!req.body.daySession.sessionID) throw new Error(`sessionID is undefined`)
            if(Object.values(req.body.daySession).filter(a=>a !== undefined).length <= 1) throw new Error(`Insufficient values`)
            const updateDaySession = new DaySession(req.body.daySession)
            res.send(await updateDaySession.update())
        } catch (error) {
            console.error(error);
            res.status(500).send(error)
        }
    }
}

