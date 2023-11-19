import databaseConn from '../../database.config.js'
import Shift from '../models/shift.model.js'

export default class ShiftController{
    static getAll = (req,res)=>{
        Shift.getAll(Result=>res.send(Result))
    }
    static getFieldNames = (req,res)=>{
        Shift.getFields(fields=>res.send(fields))
    }
    static create = (req,res,next)=>{
        const newShift = new Shift(req.body.shift)
        newShift.create(response=>res.send(response),error=>next(error))
    }
    static update = (req,res,next)=>{
        const updateShift = new Shift(req.body.shift)
        updateShift.update(response=>res.send(response),error=>next(error))
    }
}