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
        Address.create(Object.keys(req.body.address).map(key=>String(req.body.address[key])),(response)=>{
            req.body.employee.addressID = response.insertId
            const keys = Object.keys(req.body.employee)
            Employee.create(keys.map(key=>String(req.body.employee[key])),response=>res.send(response))
        })
    }
}