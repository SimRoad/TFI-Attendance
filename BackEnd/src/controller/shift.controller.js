import databaseConn from '../../database.config.js'
import Shift from '../models/shift.model.js'
import EmployeeController from './employee.controller.js'

export default class ShiftController{
    static getAllSync = (req,res)=>{
        Shift.getAll(Result=>res.send(Result))
    }
    static getFieldNamesSync = (req,res)=>{
        Shift.getFields(fields=>res.send(fields))
    }
    static createSync = (req,res,next)=>{
        const newShift = new Shift(req.body.shift)
        req.params.id = req.body.shift.employeeID
        EmployeeController.findByID(req,{send:response=>{
            if(response.length !== 0)
            newShift.create(response=>res.send(response),error=>next(error))
            else res.send(response)
        }})
    }
    static updateSync = (req,res,next)=>{
        const updateShift = new Shift(req.body.shift)
        updateShift.update(response=>res.send(response),error=>next(error))
    }
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