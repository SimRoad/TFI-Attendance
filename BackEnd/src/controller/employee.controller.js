import databaseConn from '../../database.config.js'
import Employee from "../models/employee.model.js";
import AddressController from "./address.controller.js"
import Address from '../models/address.model.js';

//Maybeee it could be something else other than a class, contact me @LaurenceTest

export default class EmployeeController{
    static findAll = (req, res)=>{
        Employee.getAll(results=>res.send(results))
        console.log(Employee.fields)
    }
    static findByID = (req, res)=>{
        Employee.getID(req.params.id,results=>res.send(results))
    }
    static getColumnNames = (req,res)=>{
        Employee.getFields(fields=>res.send(fields))
        console.log(Employee.fields)
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