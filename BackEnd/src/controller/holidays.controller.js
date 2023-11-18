import databaseConn from '../../database.config.js'
import Holidays from '../models/holidays.model.js'

export default class HolidaysController{
    static getAll = (req,res)=>{
        Holidays.getAll(result=>res.send(result));
    }
    static getFieldNames = (req,res) =>{
        Holidays.getFields(fields=>res.send(fields));
    }
}