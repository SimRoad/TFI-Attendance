import databaseConn from '../../database.config.js'
import GenericModel from './generic.model.js'

export default class Leaves extends GenericModel{
    static tableName = 'leaves'
    static fields = ["leaveID","leaveName","leaveDesc","daysLeft","employeeID"]
    constructor(leaves){
        super()
        this.table = {
            name: Leaves.tableName,
            fields: Leaves.fields
        }
        this.leaveID = leaves.leaveID
        this.employeeID = leaves.employeeID
        this.leaveName = leaves.leaveName
        this.daysLeft = leave.daysLeft
        this.leaveDesc = leave.leaveDesc
    }
}
