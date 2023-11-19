import databaseConn from '../../database.config.js'
import GenericModel from './generic.model.js'

export default class Shift extends GenericModel{
    static tableName = 'shift'
    static fields = ["shiftID","employeeID","leaveID","timeIn","timeOut","shiftDate","isWork"]
    constructor(shift){
        super()
        this.table = {
            name: Shift.tableName,
            fields: Shift.fields
        }
        this.shiftID = shift.shiftID
        this.employeeID = shift.employeeID
        this.leaveID = shift.leaveID
        this.timeIn = new Date(shift.timeIn)
        this.timeOut = new Date(shift.timeOut)
        this.shiftDate = shift.shiftDate
        this.isWork = shift.isWork
    }
}
