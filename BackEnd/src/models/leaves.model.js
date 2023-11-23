import GenericModel from './generic.model.js'

export default class Leaves extends GenericModel{
    static fields = ["leaveID","employeeID","leaveName","leaveDesc","daysLeft"]
    constructor(leaves){
        super()
        this.employeeID = leaves.employeeID
        this.leaveName = leaves.leaveName
        this.daysLeft = leaves.daysLeft
        this.leaveDesc = leaves.leaveDesc
    }
}
