import databaseConn from '../../database.config.js'
import Employee from "../models/employee.model.js";
import AddressController from "./address.controller.js"

export default class EmployeeController{
    static findAllSync = (req, res)=>{
        Employee.getAll(results=>res.send(results))
    }
    static findByIDSync = (req, res)=>{
        Employee.getID(req.params.id,results=>res.send(results))
    }
    static getColumnNamesSync = (req,res)=>{
        Employee.getFields(fields=>res.send(fields))
    }
    static createSync = (req,res,next)=>{
        AddressController.create(req,{send: response=>{
            const newEmployee = new Employee(req.body.employee)
            newEmployee.addressID = response.insertId
            newEmployee.create(empResponse=>res.send(empResponse),error=>next(error))
        }})
    }
    static updateSync = (req,res,next)=>{
        const updateEmployee = new Employee(req.body.employee)
        updateEmployee.update(response=>res.send(response),error=>next(error))
    }
    static async findAll(req, res){
        res.send(await Employee.getAll().catch(err=>next(err)))
    }
    static async findByID(req, res){
        res.send(await Address.getID(req.params.id).catch(err=>next(err)))
    }
    static async getColumnNames(req,res){
        res.send(await Address.getFields().catch(err=>next(err)))
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
        const updateEmployee = new Employee(req.body.employee)
        res.send(updateEmployee.update().catch(err=>next(err)))
    }
}