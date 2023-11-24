import DaySession from '../models/daysession.model.js'
import ExcuseReason from '../models/reason.model.js'

export default class ReasonController{
    static async findAll(req,res,next){
        res.json(await ExcuseReason.getAll().catch(err=>next(err)))
    }
    static async findByID(req,res){
        res.json(await ExcuseReason.getID(req.params.id).catch(err=>next(err)))
    }
    static async getFieldNames(req,res){
        res.json(await ExcuseReason.getFields().catch(err=>next(err)))
    }
    static async create(req,res,next){
        try {
            if((await DaySession.getID(req.body.reason.sessionID)).length){
                const newReason = new ExcuseReason(req.body.reason)
                res.json(await newReason.create())
            } else throw Error(`Session ID does not exist`)
        } catch (error) {
            next(error)
        }
    }
    static async update(req,res,next){
        try {
            const updateReason = new ExcuseReason(req.body.reason)
            res.json(await updateReason.update())
        } catch (error) {
            next(error);
        }
    }
}
