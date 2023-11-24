import Employee from '../models/employee.model.js'
import Shift from '../models/shift.model.js'

export default class ShiftController{

    static async findAll(req,res,next){
        res.json(await Shift.getAll().catch(err=>next(err)))
    }
    static async findByID(req,res){
        res.json(await Shift.getID(req.params.id).catch(err=>next(err)))
    }
    static async getFieldNames(req,res){
        res.json(await Shift.getFields().catch(err=>next(err)))
    }
    static async create(req,res,next){
        try {
            if((await Employee.getID(req.body.shift.employeeID)).length){
                const newShift = new Shift(req.body.shift)
                res.json(await newShift.create())
            }else throw Error(`Employee ID does not exist`)
        } catch (error) {
            next(error)
        }
    }
    static async update(req,res,next){
        try {
            const updateShift = new Shift(req.body.shift)
            res.json(await updateShift.update())
        } catch (error) {
            next(error);
        }
    }
}