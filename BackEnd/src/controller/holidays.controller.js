import databaseConn from '../../database.config.js'
import Holidays from '../models/holidays.model.js'

export default class HolidaysController{
    static getAllSync = (req,res)=>{
        Holidays.getAll(result=>res.send(result));
    }
    static getFieldNamesSync = (req,res) =>{
        Holidays.getFields(fields=>res.send(fields));
    }
    static createSync = (req,res,next)=>{
        const newHolidays = new Holidays(req.body.holidays)
        newHolidays.create(response=>res.send(response),error=>next(error))
    }
    static updateSync = (req,res,next)=>{
        const updateHolidays = new Holidays(req.body.holidays)
        updateHolidays.update(response=>res.send(response),error=>next(error))
    }
    static async findAll(req,res,next){
        res.send(await Holidays.getAll().catch(err=>next(err)))
    }
    static async findByID(req,res){
        res.send(await Holidays.getID(req.params.id).catch(err=>next(err)))
    }
    static async getFieldNames(req,res){
        res.send(await Holidays.getFields().catch(err=>next(err)))
    }
    static async create(req,res,next){
        const newHolidays = new Holidays(req.body.holidays)
        res.send(await newHolidays.create().catch(err=>next(err)))
    }
    static async update(req,res,next){
        try {
            if(!req.body.holidays.holidayID) throw new Error(`holidayID is undefined`)
            if(Object.values(req.body.holidays).filter(a=>a !== undefined).length <= 1) throw new Error(`Insufficient values`)
            const updateHolidays = new Holidays(req.body.holidays)
            res.send(await updateHolidays.update())
        } catch (error) {
            console.error(error);
            res.status(500).send(error)
        }
    }
}