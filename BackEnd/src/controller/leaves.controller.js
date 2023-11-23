import Employee from '../models/employee.model.js'
import Leaves from '../models/leaves.model.js'

export default class LeavesController{

    static async findAll(req,res,next){
        res.json(await Leaves.getAll().catch(err=>next(err)))
    }
    static async findByID(req,res){
        res.json(await Leaves.getID(req.params.id).catch(err=>next(err)))
    }
    static async getFieldNames(req,res){
        res.json(await Leaves.getFields().catch(err=>next(err)))
    }
    static async create(req,res,next){
        try {
            if((await Employee.getID(req.body.leaves.employeeID)).length){
                const newLeaves = new Leaves(req.body.leaves)
                res.json(await newLeaves.create())
            }else throw Error(`Employee ID does not exist`)
        } catch (error) {
            next(error)
        }
    }
    static async update(req,res,next){
        try {
            const updateLeaves = new Leaves(req.body.leaves)
            res.json(await updateLeaves.update())
        } catch (error) {
            next(error);
        }
    }
}