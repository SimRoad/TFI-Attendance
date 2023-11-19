import databaseConn from '../../database.config.js'
import Holidays from '../models/holidays.model.js'

export default class HolidaysController{
    static getAll = (req,res)=>{
        Holidays.getAll(result=>res.send(result));
    }
    static getFieldNames = (req,res) =>{
        Holidays.getFields(fields=>res.send(fields));
    }
    static create = (req,res,next)=>{
        const newHolidays = new Holidays(req.body.holidays)
        newHolidays.create(response=>res.send(response),error=>next(error))
    }
    static update = (req,res,next)=>{
        const updateHolidays = new Holidays(req.body.holidays)
        updateHolidays.update(response=>res.send(response),error=>next(error))
    }
}