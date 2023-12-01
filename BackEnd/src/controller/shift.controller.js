import Shift from '../models/shift.model.js'

export default class ShiftController{

    static async findAll(req,res,next){
        res.send(await Shift.getAll().catch(err=>next(err)))
    }
    static async findByID(req,res){
        res.send(await Shift.getID(req.params.id).catch(err=>next(err)))
    }
    static async getFieldNames(req,res){
        res.send(await Shift.getFields().catch(err=>next(err)))
    }
    static async create(req,res,next){
        try {
            let response = await Shift.getShiftConflict(req.body.dates,req.body.employees)
            if(!response.length){
                response = Shift.formatToShiftArr(req.body)
                if(response.length !== 1){
                    response = await Shift.bulkCreate(response)
                }
            }
            res.send(response)
        } catch (error) {
            next(error)
        }
    }
    static async update(req,res,next){
        try {
            const updateShift = new Shift(req.body.shift)
            res.send(await updateShift.update())
        } catch (error) {
            next(error);
        }
    }
    static async getMonthDates(req,res,next){
        try {
            (`Shift Controller running`)
            res.send(await Shift.getMonthShiftSpecial(req.body))
        } catch (error) {
            next(error)
        }
    }
}