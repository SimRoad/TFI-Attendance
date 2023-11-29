import GenericModel from './generic.model.js'
import databaseConfig from '../../database.config.js'

export default class Shift extends GenericModel{
    static fields = ["shiftID","employeeID","leaveID","reasonID","timeIn","timeOut","shiftDate","isWork"]
    constructor(shift){
        super()
        this.employeeID = shift.employeeID
        this.leaveID = shift.leaveID
        this.reasonID = shift.reasonID
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
            const [rows] = await databaseConfig.execute(`SELECT shiftID, shiftDate, leaveID, isWork FROM shift WHERE DATE(shiftDate) IN (${datesPH}) AND employeeID IN (${datesPH})`,[...dates,...employees])
            return rows
        } catch (error) {
            throw(error)
        }
    }
    static async getMonthShiftSpecial(employees){
        try {
            const employeePH = employees.map(()=>`?`).join(',')
            const temporaryExemption = `AND (isWork = FALSE OR leaveID != null)`
            const shiftQuery = `SELECT shiftDate FROM shift WHERE employeeID IN(${employeePH}) AND MONTH(shiftDate) = MONTH(NOW()) AND YEAR(shiftDate) = YEAR(NOW())`
            const [rows] = await databaseConfig.execute(shiftQuery,employees)
            console.log(rows)
            return rows
        } catch (error) {
            throw(error)
        }
    }

}
