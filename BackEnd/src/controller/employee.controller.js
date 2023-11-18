import databaseConn from '../../database.config.js'
import Employee from "../models/employee.model.js";
import Address from "./address.controller.js"

//Maybeee it could be something else other than a class, contact me @LaurenceTest

export default class EmployeeController{
    static findAll = (req, res)=>{
        Employee.getAll(results=>res.send(results))
    }
    static getColumnNames = (req,res)=>{
        Employee.getFields(fields=>res.send(fields))
        console.log(Employee.fields)
    }
    static create = (req,res)=>{
        const keys = Object.keys(req.query)
        if(compareFields(keys,Employee.fields)){
            Employee.create(keys.map(key=>String(req.query[key])),response=>res.send(response))
        }else console.error(`Missing field!`)
    }
}

function compareFields(first,second){
    second.splice(0,1)
    return first.length === second.length && first.every((elem,index)=>elem === second[index])
}