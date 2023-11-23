import Holidays from '../models/holidays.model.js'

export default class HolidaysController{
    static async findAll(req,res,next){
        res.json(await Holidays.getAll().catch(err=>next(err)))
    }
    static async findByID(req,res){
        res.json(await Holidays.getID(req.params.id).catch(err=>next(err)))
    }
    static async getFieldNames(req,res){
        res.json(await Holidays.getFields().catch(err=>next(err)))
    }
    static async create(req,res,next){
        try {
            const newHolidays = new Holidays(req.body.holidays)
            res.json(await newHolidays.create())
        } catch (error) {
            next(error)
        }
    }
    static async update(req,res,next){
        try {
            const updateHolidays = new Holidays(req.body.holidays)
            res.json(await updateHolidays.update())
        } catch (error) {
            next(error);
        }
    }

    static async showAllHolidays(req,res,next){
        
    }
}