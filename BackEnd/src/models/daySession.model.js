import GenericModel from './generic.model.js'

export default class DaySession extends GenericModel{
    static fields = ["sessionID","employeeID","timeIn","timeOut","dayStatus"]
    constructor(daysession){
        super()
        this.employeeID = daysession.employeeID
        this.timeIn = daysession.timeIn
        this.timeOut = daysession.timeOut
        this.dayStatus = daysession.dayStatus
    }
}