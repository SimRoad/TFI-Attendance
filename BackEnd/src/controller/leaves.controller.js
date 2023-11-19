import e from 'express'
import databaseConn from '../../database.config.js'
import Leaves from '../models/leaves.model.js'
import EmployeeController from './employee.controller.js'

export default class LeavesController{
    static getAll = (req,res)=>{
        Leaves.getAll(Results =>res.send(Results))
    }
    static getFieldNames = (req,res)=>{
        Leaves.getFields(fields=>res.send(fields))
    }
    static create = (req,res,next)=>{
        console.log(req.body)
        const newLeaves = new Leaves(req.body.leaves)
        req.params.id = req.body.leaves.employeeID
        console.log(req.params.id)
        EmployeeController.findByID(req,{send:response=>{
            if(response.length !== 0)
            newLeaves.create(response=>res.send(response),error=>next(error))
            else res.status(404).send(response)
        }})

    }
    static update = (req,res,next)=>{
        const updateLeaves = new Leaves(req.body.leaves)
        updateLeaves.update(response=>res.send(response),error=>next(error))
    }
}