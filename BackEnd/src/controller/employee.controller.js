import databaseConn from '../../database.config.js'
import Employee from "../models/employee.model.js";
import AddressController from "./address.controller.js"

export default class EmployeeController{
    static findAll = (req, res)=>{
        Employee.getAll(results=>res.send(results))
    }
    static findByID = (req, res)=>{
        console.log(req.params.id)
        Employee.getID(req.params.id,results=>res.send(results))
    }
    static getColumnNames = (req,res)=>{
        Employee.getFields(fields=>res.send(fields))
    }
    static create = (req,res,next)=>{
        AddressController.create(req,{send: response=>{
            const newEmployee = new Employee(req.body.employee)
            newEmployee.addressID = response.insertId
            newEmployee.create(empResponse=>res.send(empResponse),error=>next(error))
        }})
    }
    static update = (req,res,next)=>{
        const updateEmployee = new Employee(req.body.employee)
        updateEmployee.update(response=>res.send(response),error=>next(error))
    }
}