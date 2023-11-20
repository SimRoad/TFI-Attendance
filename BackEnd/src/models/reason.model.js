import GenericModel from './generic.model.js'

export default class Reason extends GenericModel{
    static tableName = 'excusereason'
    static fields = ["reasonID","sessionID","reason"]
    constructor(reason){
        super()
        this.table = {
            name: Reason.tableName,
            fields: Reason.fields
        }
        this.reasonID = reason.reasonID
        this.sessionID = reason.sessionID
        this.reason = reason.reason
    }
}