import databaseConn from '../../database.config.js'
import Employee from "../models/employee.model.js";

//Maybeee it could be something else other than a class, contact me @LaurenceTest

export default class EmployeeController{
    static findAll = (req, res)=>{
        res.send({status:200})
    }
    static getColumnNames = (req,res)=>{
        res.send(Employee.fields)
    }
}
