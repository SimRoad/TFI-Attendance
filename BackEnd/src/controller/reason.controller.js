import databaseConn from '../../database.config.js'
import Reason from '../models/reason.model.js'
import DaySessionController from './daysession.controller.js'

export default class ReasonController{
    static getAllSync = (req,res)=>{
        Reason.getAll(Result=>res.send(Result))
    }
    static getFieldNamesSync = (req,res)=>{
        Reason.getFields(fields=>res.send(fields))
    }
    static createSync = (req,res,next)=>{
        const newReason = new Reason(req.body.reason)
        req.params.id = req.body.reason.sessionID
        DaySessionController.findbyID(req,{send:response=>{
            console.log(response)
            if(response.length !== 0){
            newReason.create(response=>res.send(response),error=>next(error))
            }
            else res.send(response)
        }})
        
    }
    static updateSync = (req,res,next)=>{
        const updateReason = new Reason(req.body.reason)
        updateReason.update(response=>res.send(response),error=>next(error))
    }
    static async findAll(req,res,next){
        res.send(await Reason.getAll().catch(err=>next(err)))
    }
    static async findByID(req,res){
        res.send(await Reason.getID(req.params.id).catch(err=>next(err)))
    }
    static async getFieldNames(req,res){
        res.send(await Reason.getFields().catch(err=>next(err)))
    }
    static async create(req,res,next){
        const newReason = new Reason(req.body.reason)
        res.send(await newReason.create().catch(err=>next(err)))
    }
    static async update(req,res,next){
        try {
            if(!req.body.reason.reasonID) throw new Error(`reasonID is undefined`)
            if(Object.values(req.body.reason).filter(a=>a !== undefined).length <= 1) throw new Error(`Insufficient values`)
            const updateReason = new Reason(req.body.reason)
            res.send(await updateReason.update())
        } catch (error) {
            console.error(error);
            res.status(500).send(error)
        }
    }
}
