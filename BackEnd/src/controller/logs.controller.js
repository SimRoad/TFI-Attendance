import databaseConn from '../../database.config.js'
import Logs from '../models/Logs.model.js'
import UserController from './user.controller.js'

export default class LogsController{
    static getAllSync = (req,res)=>{
        Logs.getAll(Results=>res.send(Results))
    }
    static getFieldNamesSync = (req,res)=>{
        Logs.getFields(fields=>res.send(fields))
    }
    static createSync = (req,res,next)=>{
        const newLogs = new Logs(req.body.logs)
        req.params.id = req.body.logs.generatedBy
        UserController.findbyID(req,{send:response=>{
            if(response.length !== 0)
            newLogs.create(response=>res.send(response),error=>next(error))
            else res.send(response)
        }})
    }
    static updateSync = (req,res,next)=>{
        const updateLogs = new Logs(req.body.logs)
        updateLogs.update(response=>res.send(response),error=>next(error))
    }
    static async findAll(req,res,next){
        res.send(await Logs.getAll().catch(err=>next(err)))
    }
    static async findByID(req,res){
        res.send(await Logs.getID(req.params.id).catch(err=>next(err)))
    }
    static async getFieldNames(req,res){
        res.send(await Logs.getFields().catch(err=>next(err)))
    }
    static async create(req,res,next){
        const newLogs = new Logs(req.body.logs)
        res.send(await newLogs.create().catch(err=>next(err)))
    }
    static async update(req,res,next){
        try {
            if(!req.body.logs.logID) throw new Error(`logID is undefined`)
            if(Object.values(req.body.logs).filter(a=>a !== undefined).length <= 1) throw new Error(`Insufficient values`)
            const updateLogs = new Logs(req.body.logs)
            res.send(await updateLogs.update())
        } catch (error) {
            console.error(error);
            res.status(500).send(error)
        }
    }
}