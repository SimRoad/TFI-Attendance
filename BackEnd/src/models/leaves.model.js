import GenericModel from './generic.model.js'

export default class Leaves extends GenericModel{
    static tableName = 'leaves'
    static fields = ["leaveID","employeeID","leaveName","leaveDesc","daysLeft"]
    constructor(leaves){
        super()
        this.table = {
            name: Leaves.tableName,
            fields: Leaves.fields
        }
        this.leaveID = leaves.leaveID
        this.employeeID = leaves.employeeID
        this.leaveName = leaves.leaveName
        this.daysLeft = leaves.daysLeft
        this.leaveDesc = leaves.leaveDesc
    }
}
