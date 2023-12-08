import Address from '../models/address.model.js';
import Employee from "../models/employee.model.js";
import databaseConfig from '../../database.config.js';
import { generateImageName } from '../middleware/imgReceive.js';
import LeaveDays from '../models/leaveDays.model.js';
import DaySession from '../models/daySession.model.js';

export default class EmployeeController{
    static async findAll(req,res,next){
        try {
            res.send(await Employee.getEmployeeList())
        } catch (error) {
            next(error)
        }
    }
    static async findByID(req,res,next){
        res.send(await Employee.getID(req.params.id).catch(err=>next(err)))
    }
    static async getColumnNames(req,res,next){
        res.send(await Employee.getFields().catch(err=>next(err)))
    }
    static async create(req,res,next){
        const conn = await databaseConfig.getConnection()
        try {
            await conn.beginTransaction()
            const newAddress = new Address(req.body.address)
            const newEmployee = new Employee(req.body.employee)
            newEmployee.imageDir = await generateImageName(req.file)
            await newAddress.create(conn)
            .then(({insertId})=>newEmployee.addressID = insertId)
            .then(async()=>await newEmployee.create(conn)
                .then(({insertId})=> LeaveDays.createDefault(insertId,conn))
            )
            res.send(await conn.commit())
        } catch (error) {
            if(conn) conn.rollback()
            next(error) 
        } finally {
            if(conn) conn.release()
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
    static async searchName(req,res,next){
        try {
            res.send(await Employee.fuzzySearch(req.query.input))
        } catch (error) {
            next(error)
        }
    }
    static async getWorkHours(req,res,next){
        try {
            let response
            const {id,date} = req.query
            response = await DaySession.getEmpDayWorkHours(id,date)
            res.send(response)
        } catch (error) {
            next(error)
        }
    }
}