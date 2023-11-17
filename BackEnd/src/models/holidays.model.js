import dbConn from './db.config.js'

class Holidays{
    constructor(holiday){
        this.holidayID = holiday.holidayID
        this.holidayName = holiday.holidayName
        this.holidayDesc = holiday.holidayDesc
        this.holidayDate = new Date(holiday.holidayDate)
        this.holidayType = holiday.holidayType
    }
}

export default Holidays