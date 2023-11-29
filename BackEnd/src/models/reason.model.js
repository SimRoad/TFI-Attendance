import GenericModel from './generic.model.js'

export default class ExcuseReason extends GenericModel{
    static fields = ["reasonID","reason"]
    constructor(reason){
        super()
        this.sessionID = reason.sessionID
        this.reason = reason.reason
    }
}