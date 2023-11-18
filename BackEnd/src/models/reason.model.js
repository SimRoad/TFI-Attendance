import databaseConn from '../../database.config.js'
import GenericModel from './generic.model.js'

export default class Reason extends GenericModel{
    static tableName = 'excusereason'
    static fields = ["reasonID","sessionID","reason"]
    constructor(Reason){
        this.reasonID = Reason.reasonID
        this.sessionID = Reason.sessionID
        this.reason = Reason.reason
    }
}