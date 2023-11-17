import dbConn from './db.config.js'

class DaySession{
    constructor(daySession){
        this.sessionID = daySession.sessionID
        this.employeeID = daySession.employeeID
        this.timeIn = daySession.timeIn
        this.timeOut = daySession.timeOut
        this.dayStatus = daySession.dayStatus
    }
}

export default = DaySession