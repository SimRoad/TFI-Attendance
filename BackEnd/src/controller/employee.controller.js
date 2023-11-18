import databaseConn from '../../database.config.js'
import Employee from "../models/employee.model.js";
import Address from "./address.controller.js"

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
        // const keys = Object.keys(req.body.Employee)
        // Address.create()
        // Employee.create(keys.map(key=>String(req.query[key])),response=>res.send(response))
    }
}