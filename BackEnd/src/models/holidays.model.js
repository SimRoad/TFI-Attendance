import databaseConn from '../../database.config.js'
import GenericModel from './generic.model.js'

class Holidays extends GenericModel{
    constructor(holiday){
        this.holidayID = holiday.holidayID
        this.holidayName = holiday.holidayName
        this.holidayDesc = holiday.holidayDesc
        this.holidayDate = new Date(holiday.holidayDate)
        this.holidayType = holiday.holidayType
    }
}

export default Holidays