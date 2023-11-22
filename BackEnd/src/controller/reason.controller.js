import databaseConn from '../../database.config.js'
import Reason from '../models/reason.model.js'
import DaySessionController from './daysession.controller.js'

export default class ReasonController{
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
