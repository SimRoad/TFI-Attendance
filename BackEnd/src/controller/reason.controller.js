import databaseConn from '../../database.config.js'
import Reason from '../models/reason.model.js'

export default class ReasonController{
    static getAll = (req,res)=>{
        Reason.getAll(Result=>res.send(Result))
    }
    static getFieldNames = (req,res)=>{
        Reason.getFields(fields=>res.send(fields))
    }
}
