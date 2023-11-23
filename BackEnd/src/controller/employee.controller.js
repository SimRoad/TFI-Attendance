import Address from '../models/address.model.js';
import Employee from "../models/employee.model.js";

export default class EmployeeController{
    static async findAll(req,res,next){
        res.send(await Employee.getAll().catch(err=>next(err)))
    }
    static async findByID(req,res,next){
        res.send(await Employee.getID(req.params.id).catch(err=>next(err)))
    }
    static async getColumnNames(req,res,next){
        res.send(await Employee.getFields().catch(err=>next(err)))
    }
    static async create(req,res,next){
        try {
            const newAddress = new Address(req.body.address)
            const newEmployee = new Employee(req.body.employee)
            await newAddress.create().then(response=>newEmployee.addressID = response.insertId)
            res.send(await newEmployee.create())
        } catch (error) {
            next(error)
        }
    }
    static async update(req,res,next){
        try {
            const updateEmployee = new Employee(req.body.employee)
            res.send(await updateEmployee.update())
        } catch (error) {
            next(error)
        }
    }
}