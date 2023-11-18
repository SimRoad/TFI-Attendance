import databaseConn from '../../database.config.js'
import Employee from "../models/employee.model.js";

export default class EmployeeController{
    constructor(){
        this.findAll = (req, res)=>{
            console.log("Employee Controller")
            res.send({status:200})
        }
    }
}