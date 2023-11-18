import databaseConn from '../../database.config.js'
import GenericModel from './generic.model.js'

export default class Holidays extends GenericModel{
    static tableName = 'holidays'
    static fields = ["holidayID","holidayName","holiddayDesc","holidayType"]
    constructor(holiday){
        this.holidayID = holiday.holidayID
        this.holidayName = holiday.holidayName
        this.holidayDesc = holiday.holidayDesc
        this.holidayDate = new Date(holiday.holidayDate)
        this.holidayType = holiday.holidayType
    }
}