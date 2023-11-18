import databaseConn from '../../database.config.js'
import Employee from "../models/employee.model.js";

//Maybeee it could be something else other than a class, contact me @LaurenceTest

export default class EmployeeController{
    static findAll = (req, res)=>{
        Employee.getAll(results=>res.send(results))
    }
    static getColumnNames = (req,res)=>{
        Employee.getFields(fields=>res.send(fields))
        console.log(Employee.fields)
    }
}
