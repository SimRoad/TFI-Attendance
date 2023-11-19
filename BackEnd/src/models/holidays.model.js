import databaseConn from '../../database.config.js'
import GenericModel from './generic.model.js'

export default class Holidays extends GenericModel{
    static tableName = 'holidays'
    static fields = ["holidayID","holidayName","holidayDesc","holidayType"]
    constructor(holiday){
        super()
        this.table = {
            name: Holidays.tableName,
            fields: Holidays.fields
        }
        this.holidayID = holiday.holidayID
        this.holidayName = holiday.holidayName
        this.holidayDesc = holiday.holidayDesc
        this.holidayDate = holiday.holidayDate ? new Date(holiday.holidayDate) : undefined
        this.holidayType = holiday.holidayType
    }
}