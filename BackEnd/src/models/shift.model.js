import GenericModel from './generic.model.js'
import databaseConfig from '../../database.config.js'

export default class Shift extends GenericModel{
    static fields = ["shiftID","employeeID","leaveID","timeIn","timeOut","shiftDate","isWork"]
    constructor(shift){
        super()
        this.employeeID = shift.employeeID
        this.leaveID = shift.leaveID
        this.timeIn = shift.timeIn ? new Date(shift.timeIn) : undefined
        this.timeOut = shift.timeOut ? new Date(shift.timeOut) : undefined
        this.shiftDate = shift.shiftDate
        this.isWork = shift.isWork
    }
    static formatToShiftArr(pkg){
        return pkg.dates.map(date=>{
            return pkg.employees.map(emp=>{
                return [date,pkg.timeIn, pkg.timeOut,emp]
            })
        }).flat()
    }
    static async getShiftConflict(dates,employees){
        try {
            const datesPH = dates.map(()=>`?`).join(',')
            const employeesPH = employees.map(()=>`?`).join(',')
            const [rows] = await databaseConfig.execute(`SELECT shiftID, shiftDate, leaveID, isWork from shift WHERE DATE(shiftDate) IN (${datesPH}) AND employeeID IN (${employeesPH})`,[...dates,...employees])
            console.log(rows)
            return rows
        } catch (error) {
            throw(error)
        }
    }

}
