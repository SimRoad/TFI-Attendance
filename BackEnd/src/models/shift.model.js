import dbConn from './db.config.js'

class Shift{
    constructor(shift){
        this.shiftID = shift.shiftID
        this.employeeID = shift.employeeID
        this.timeIn = shift.timeIn
        this.timeOut = shift.timeOut
        this.weekDay = shift.weekDay
    }
}

module.exports = Shift