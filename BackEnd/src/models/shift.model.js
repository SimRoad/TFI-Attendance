import GenericModel from './generic.model.js'
import databaseConfig from '../../database.config.js'

export default class Shift extends GenericModel{
    static fields = ["shiftID","employeeID","leaveDaysID","reasonID","timeIn","timeOut","shiftDate"]
    constructor(shift){
        super()
        this.employeeID = shift.employeeID
        this.leaveDaysID = shift.leaveDaysID
        this.reasonID = shift.reasonID
        this.timeIn = shift.timeIn ? new Date(shift.timeIn) : undefined
        this.timeOut = shift.timeOut ? new Date(shift.timeOut) : undefined
        this.shiftDate = shift.shiftDate
    }
    static formatToShiftArr(pkg){
        return pkg.dates.map(date=>{
            return pkg.employees.map(emp=>{
                return [date,pkg.timeIn, pkg.timeOut,emp]
            })
        }).flat()
    }
    static async bulkCreate(shifts){
        try{
            shifts.forEach(shift=>{
                shift.forEach(prop=>prop = prop ?? null)
            })
            const placeholder = shifts.map(a=>'(?,?,?,?)')
            let response
            // if((response = await databaseConfig.execute(`UPDATE shift SET `)))
            const [rows] = await databaseConfig.execute(`INSERT INTO shift(shiftDate,timeIn,timeOut,employeeID) 
            VALUES${placeholder} ON DUPLICATE KEY UPDATE timeIn = VALUES(timeIn), timeOut = VALUES(timeOut)`,shifts.flat())
            return rows
        } catch (error) {
            throw(error)
        }
    }
    static async getShiftConflict(dates,employees){
        try {
            const datesPH = dates.map(()=>`?`).join(',')
            const employeesPH = employees.map(()=>`?`).join(',')
            const [rows] = await databaseConfig.execute(`SELECT shiftID, shiftDate, leaveDaysID 
            FROM shift 
            WHERE DATE(shiftDate) IN (${datesPH}) 
            AND employeeID IN (${employeesPH})
            AND leaveDaysID IS NULL`,[...dates,...employees])
            return rows
        } catch (error) {
            throw(error)
        }
    }
    static async getMonthShiftSpecial(employees){
        try {
            if(!employees.length) return []
            const employeePH = employees.map(()=>`?`).join(',')
            const shiftQuery = `SELECT shiftDate FROM shift 
            WHERE employeeID IN(${employeePH}) 
            AND MONTH(shiftDate) = MONTH(NOW()) 
            AND YEAR(shiftDate) = YEAR(NOW())
            AND leaveDaysID IS NULL`
            const [rows] = await databaseConfig.execute(shiftQuery,employees)
            return rows
        } catch (error) {
            throw(error)
        }
    }
    static async getUnresolvedStatus(){
        try {
            
        } catch (error) {
            throw(error)
        }
    }
}
