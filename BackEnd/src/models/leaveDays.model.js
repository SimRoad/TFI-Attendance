import databaseConfig from "../../database.config.js";
import GenericModel from "./generic.model.js";
import Leaves from "./leaves.model.js";

class LeaveDays extends GenericModel{
    constructor(leaveDays){
        this.leaveID = leaveDays.leaveID
        this.employeeID = leaveDays.employeeID
        this.daysLeft = leaveDays.daysLeft
        this.activeYear = leaveDays.activeYear
    }
    static async findByEmployee(id){
        const [rows] = await databaseConfig.execute(`SELECT leaveID, leaveDaysID, daysLeft FROM leaveDays WHERE employeeID = ? AND YEAR(activeYear) = YEAR(CURDATE())`,[id])
        return rows
    }
    static async createDefault(id,conn){
        const dbConn = conn || databaseConfig
        const response = await Leaves.getAll()
        let sql = `INSERT INTO leavedays(leaveID, employeeID, activeYear, daysLeft) VALUES`
        sql += response.map(row=>`(${row.leavesID}, ${id}, CURDATE(), ${row.defaultDays})`).join(',')
        return await dbConn.query(sql)
    }
    static async assignLeaves(empID,leaveDaysID,reasonID,dates,conn){
        try {
            const dbConn = conn || databaseConfig
            const placeholder = dates.map(()=>`(?,?,?,?)`)
            const values = dates.map(date=>[empID,leaveDaysID,reasonID,new Date(date)])
            // if(await dbConn.execute(`SELECT shiftID FROM shift WHERE employeeID = ? AND shiftDate IN (${dates.map(()=>`?`)})`))
            // dbConn.execute(`UPDATE shift SET leaveDaysID = ? WHERE shiftDate IN (${dates.map(()=>`?`)})`,[leaveDaysID, dates.map(date=>new Date(date)).flat()])
            // else {
                const [rows] = await dbConn.execute(`INSERT INTO shift(employeeID,leaveDaysID,reasonID,shiftDate) VALUES
                ${placeholder}`,values.flat())
            // }
            return rows
        } catch (error) {
            throw(error)
        }
    }
    static async reduceDays(id,days,conn){
        try {
            const dbConn = conn || databaseConfig
            return await dbConn.execute(`UPDATE leaveDays SET daysLeft = (daysLeft - ?) WHERE leaveDaysID = ?`,[days,id])
        } catch (error) {
            throw(error)
        }
    }
}

export default LeaveDays