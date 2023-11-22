import databaseConn from '../../database.config.js'
import Employee from "../models/employee.model.js";
import AddressController from "./address.controller.js"

export default class EmployeeController{
    static async findAll(req, res,next){
        res.send(await Employee.getAll().catch(err=>next(err)))
    }
    static async findByID(req, res,next){
        res.send(await Employee.getID(req.params.id).catch(err=>next(err)))
    }
    static async getColumnNames(req,res,next){
        res.send(await Employee.getFields().catch(err=>next(err)))
    }
    static async create(req,res,next){
        AddressController.create(req,{send: async response=>{
            try {
                const newEmployee = new Employee(req.body.employee)
                newEmployee.addressID = response.insertId
                res.send(await newEmployee.create())
            } catch (error) {
                console.error(error)
                next(error)
            }
        }})
    }
    static async update(req,res,next){
        console.log(`updating`)
        try {
            if(!req.body.employee.employeeID) throw new Error(`employeeID is undefined`)
            if(Object.values(req.body.employee).filter(a=>a !== undefined).length <= 1) throw new Error(`Insufficient values`)
            const updateEmployee = new Employee(req.body.employee)
            res.send(await updateEmployee.update())
        } catch (error) {
            console.error(error);
            res.status(500).send(error)
            next(error)
        }
    }
}