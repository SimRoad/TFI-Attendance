import databaseConn from '../../database.config.js'
import GenericModel from './generic.model.js'

export default class Leaves extends GenericModel{
    static tableName = 'leaves'
    static fields = ["leaveID","leaveName","leaveDesc","daysLeft","employeeID"]
    constructor(Leaves){
        this.leaveID = Leaves.leaveID
        this.employeeID = Leaves.employeeID
        this.leaveName = Leaves.leaveName
        this.daysLeft = Leave.daysLeft
        this.leaveDesc = Leave.leaveDesc
    }
}
