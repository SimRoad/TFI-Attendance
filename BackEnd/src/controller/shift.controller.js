import databaseConn from '../../database.config.js'
import Shift from '../models/shift.model.js'
import EmployeeController from './employee.controller.js'

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
        const newShift = new Shift(req.body.shift)
        res.send(await newShift.create().catch(err=>next(err)))
    }
    static async update(req,res,next){
        try {
            if(!req.body.shift.shiftID) throw new Error(`shiftID is undefined`)
            if(Object.values(req.body.shift).filter(a=>a !== undefined).length <= 1) throw new Error(`Insufficient values`)
            const updateShift = new Shift(req.body.shift)
            res.send(await updateShift.update())
        } catch (error) {
            console.error(error);
            res.status(500).send(error)
        }
    }
}