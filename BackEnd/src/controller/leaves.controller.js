import databaseConn from '../../database.config.js'
import Leaves from '../models/leaves.model.js'

export default class LeavesController{
    static getAll = (req,res)=>{
        Leaves.getAll(Results =>res.send(Results))
    }
    static getFieldNames = (req,res)=>{
        Leaves.getFields(fields=>res.send(fields))
    }
}