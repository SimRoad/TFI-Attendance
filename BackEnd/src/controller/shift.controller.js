import databaseConn from '../../database.config.js'
import Shift from '../models/shift.model.js'

export default class ShiftController{
    static getAll = (req,res)=>{
        Shift.getAll(Result=>res.send(Result))
    }
    static getFieldNames = (req,res)=>{
        Shift.getFields(fields=>res.send(fields))
    }
}