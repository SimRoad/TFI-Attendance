import databaseConn from '../../database.config.js'
import Reason from '../models/reason.model.js'
import DaySessionController from './daysession.controller.js'

export default class ReasonController{
    static getAll = (req,res)=>{
        Reason.getAll(Result=>res.send(Result))
    }
    static getFieldNames = (req,res)=>{
        Reason.getFields(fields=>res.send(fields))
    }
    static create = (req,res,next)=>{
        const newReason = new Reason(req.body.reason)
        req.params.id = req.body.reason.sessionID
        DaySessionController.findbyID(req,{send:response=>{
            console.log(response)
            if(response.length !== 0){
            newReason.create(response=>res.send(response),error=>next(error))
            }
            else res.status(404).send(response)
        }})
        
    }
    static update = (req,res,next)=>{
        const updateReason = new Reason(req.body.reason)
        updateReason.update(response=>res.send(response),error=>next(error))
    }
}
