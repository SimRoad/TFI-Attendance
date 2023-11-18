import databaseConn from '../../database.config.js'

export default class Leaves{
    constructor(Leaves){
        this.leaveID = Leaves.leaveID
        this.employeeID = Leaves.employeeID
        this.leaveName = Leaves.leaveName
        this.daysLeft = Leave.daysLeft
        this.leaveDesc = Leave.leaveDesc
    }
}
