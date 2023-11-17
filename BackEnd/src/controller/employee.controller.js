import databaseConn from '../../database.config.js'
import Employee from "../models/employee.model";

class EmployeeController{
    constructor(){}
    findAll(req,res){
        console.log(Employee.getAll())
    }
}

export default EmployeeController