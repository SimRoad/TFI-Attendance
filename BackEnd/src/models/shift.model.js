import GenericModel from './generic.model.js'

export default class Shift extends GenericModel{
    static fields = ["shiftID","employeeID","leaveID","timeIn","timeOut","shiftDate","isWork"]
    constructor(shift){
        super()
        this.employeeID = shift.employeeID
        this.leaveID = shift.leaveID
        this.timeIn = shift.timeIn ? new Date(shift.timeIn) : undefined
        this.timeOut = shift.timeOut ? new Date(shift.timeOut) : undefined
        this.shiftDate = shift.shiftDate
        this.isWork = shift.isWork
    }
}
