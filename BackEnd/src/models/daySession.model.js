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
            const temp = await databaseConfig.getConnection()
            console.log(`INSERT INTO daySession (${fields}) VALUES(${values})`)
            temp.beginTransaction()
            const response = await temp.execute(`INSERT INTO daySession (${fields}) VALUES(${valuesPH})`,values)
            temp.rollback()
            temp.release()
            return response
        } catch (error) {
            throw(error)
        }
    }
    async setTimeOut(){
        try {
            timeOutDate = this.timeOut ?? new Date()
            const temp = await databaseConfig.getConnection()
            temp.beginTransaction()
            const response = await temp.execute('UPDATE daySession SET timeOut = ?, dayStatus = ? WHERE employeeID = ? AND DATE(timeIn) = NOW() AND timeOut = null',[timeOut,this.dayStatus,this.employeeID])
            console.log(response)
            temp.rollback()
            temp.release()
            return response
        } catch (error) {
            throw(error)
        }
    }
}