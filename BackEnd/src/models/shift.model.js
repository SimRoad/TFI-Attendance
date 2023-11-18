import databaseConn from '../../database.config.js'
import GenericModel from './generic.model.js'

export default class Shift extends GenericModel{
    constructor(shift){
        this.shiftID = shift.shiftID
        this.employeeID = shift.employeeID
        this.timeIn = new Date(shift.timeIn)
        this.timeOut = new Date(shift.timeOut)
        this.weekDay = shift.weekDay
    }
}
