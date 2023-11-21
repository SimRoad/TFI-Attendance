import Leaves from '../models/leaves.model.js'
import EmployeeController from './employee.controller.js'

export default class LeavesController{
    static getAllSync = (req,res)=>{
        Leaves.getAll(Results =>res.send(Results))
    }
    static getFieldNamesSync = (req,res)=>{
        Leaves.getFields(fields=>res.send(fields))
    }
    static createSync = (req,res,next)=>{
        const newLeaves = new Leaves(req.body.leaves)
        req.params.id = req.body.leaves.employeeID
        EmployeeController.findByID(req,{send:response=>{
            if(response.length !== 0)
            newLeaves.create(response=>res.send(response),error=>next(error))
            else res.send(response)
        }})

    }
    static updateSync = (req,res,next)=>{
        const updateLeaves = new Leaves(req.body.leaves)
        updateLeaves.update(response=>res.send(response),error=>next(error))
    }

    static async findAll(req,res,next){
        res.send(await Leaves.getAll().catch(err=>next(err)))
    }
    static async findByID(req,res){
        res.send(await Leaves.getID(req.params.id).catch(err=>next(err)))
    }
    static async getFieldNames(req,res){
        res.send(await Leaves.getFields().catch(err=>next(err)))
    }
    static async create(req,res,next){
        const newLeaves = new Leaves(req.body.leaves)
        res.send(await newLeaves.create().catch(err=>next(err)))
    }
    static async update(req,res,next){
        try {
            if(!req.body.leaves.leaveID) throw new Error(`leaveID is undefined`)
            if(Object.values(req.body.leaves).filter(a=>a !== undefined).length <= 1) throw new Error(`Insufficient values`)
            const updateLeaves = new Leaves(req.body.leaves)
            res.send(await updateLeaves.update())
        } catch (error) {
            console.error(error);
            res.status(500).send(error)
        }
    }
}