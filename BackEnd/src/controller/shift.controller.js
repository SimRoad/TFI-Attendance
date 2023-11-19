import databaseConn from '../../database.config.js'
import Shift from '../models/shift.model.js'
import EmployeeController from './employee.controller.js'

export default class ShiftController{
    static getAll = (req,res)=>{
        Shift.getAll(Result=>res.send(Result))
    }
    static getFieldNames = (req,res)=>{
        Shift.getFields(fields=>res.send(fields))
    }
    static create = (req,res,next)=>{
        const newShift = new Shift(req.body.shift)
        req.params.id = req.body.shift.employeeID
        EmployeeController.findByID(req,{send:response=>{
            if(response.length !== 0)
            newShift.create(response=>res.send(response),error=>next(error))
            else res.status(404).send(response)
        }})
    }
    static update = (req,res,next)=>{
        const updateShift = new Shift(req.body.shift)
        updateShift.update(response=>res.send(response),error=>next(error))
    }
}