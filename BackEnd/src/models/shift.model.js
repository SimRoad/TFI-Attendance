import dbConn from './db.config.js'

class Shift{
    constructor(shift){
        this.shiftID = shift.shiftID
        this.employeeID = shift.employeeID
        this.timeIn = new Date(shift.timeIn)
        this.timeOut = new Date(shift.timeOut)
        this.weekDay = shift.weekDay
    }
}

module.exports = Shift