import databaseConn from '../../database.config.js'
import Employee from "../models/employee.model.js";
import AddressController from "./address.controller.js"
import Address from '../models/address.model.js';

//Maybeee it could be something else other than a class, contact me @LaurenceTest

export default class EmployeeController{
    static findAll = (req, res)=>{
        Employee.getAll(results=>res.send(results))
    }
    static findByID = (req, res)=>{
        //1 is temporary, replace later
        Employee.getID(1,results=>res.send(results))
    }
    static getColumnNames = (req,res)=>{
        Employee.getFields(fields=>res.send(fields))
        console.log(Employee.fields)
    }
    static create = (req,res)=>{
        const newAddress = new Address(req.body.address)
        newAddress.create(response=>{
            const newEmployee = new Employee(req.body.employee)
            newEmployee.addressID = response.insertId
            newEmployee.create(response=>res.send(response))
        })
    }
}