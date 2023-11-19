import databaseConn from '../../database.config.js'
import Leaves from '../models/leaves.model.js'

export default class LeavesController{
    static getAll = (req,res)=>{
        Leaves.getAll(Results =>res.send(Results))
    }
    static getFieldNames = (req,res)=>{
        Leaves.getFields(fields=>res.send(fields))
    }
    static create = (req,res,next)=>{
        const newLeaves = new Leaves(req.body.leaves)
        newLeaves.create(response=>res.send(response),error=>next(error))
    }
    static update = (req,res,next)=>{
        const updateLeaves = new Leaves(req.body.leaves)
        updateLeaves.update(response=>res.send(response),error=>next(error))
    }
}