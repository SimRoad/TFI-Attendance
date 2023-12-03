import GenericModel from './generic.model.js'
import databaseConfig from '../../database.config.js'

export default class DaySession extends GenericModel{
    static fields = ["sessionID","employeeID","reasonID","timeIn","timeOut","dayStatus"]
    constructor(daysession){
        super()
        if(!daysession.employeeID) throw Error('Missing dependency: employeeID')
        this.employeeID = daysession.employeeID
        this.reasonID = daysession.reasonID ?? null
        this.timeIn = daysession.timeIn ?? null
        this.timeOut = daysession.timeOut ?? null
        this.dayStatus = daysession.dayStatus ?? null
    }
    async setTimeIn(){
        try {
            const fields = Object.keys(this).filter(key=>this[key]).slice(1)
            const values = Object.values(this).filter(prop=>prop).slice(1)
            const valuesPH = values.map(a=>`?`).join(',')
            let response
            const temp = await databaseConfig.getConnection()
            temp.beginTransaction()
            const existQuery = `
                SELECT CASE 
                WHEN EXISTS(SELECT 1 FROM shift WHERE employeeID = ? AND shiftDate = CURDATE())
                AND NOT EXISTS(SELECT 1 FROM daysession WHERE DATE(timeIn) = CURDATE() AND employeeID = ? AND timeOut is NULL)
                THEN 'Proceed'
                ELSE 'Halt'
                END AS Exist
            `
            if(await temp.execute(existQuery,[this.employeeID]) === 'Proceed'){
                response = await temp.execute(`INSERT INTO daySession (${fields}) VALUES(${valuesPH})`,values)
                temp.rollback()
                temp.release()
            }else{
                response = "There is no shift for this employee today"
            }
            return response
        } catch (error) {
            throw(error)
        }
    }
    async setTimeOut(){
        try {
            const timeOutDate = this.timeOut ?? new Date()
            let response
            const temp = await databaseConfig.getConnection()
            temp.beginTransaction()
            const [rows] = await temp.execute(`SELECT shiftID FROM shift WHERE employeeID = ? AND shiftDate = NOW() AND timeIN != null AND timeOut = null`,[this.employeeID])
            if(rows.length){
                response = await temp.execute('UPDATE daySession SET timeOut = ?, dayStatus = ? WHERE employeeID = ? AND DATE(timeIn) = NOW() AND timeOut = null',[timeOutDate,this.dayStatus,this.employeeID])
                console.log(response)
                temp.rollback()
                temp.release()
            }else{
                response = "No time in found for today"
            }
            return response
        } catch (error) {
            throw(error)
        }
    }
}