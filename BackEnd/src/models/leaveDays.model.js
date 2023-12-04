import databaseConfig from "../../database.config.js";
import Leaves from "./leaves.model.js";

class LeaveDays{
    constructor(leaveDays){
        this.leaveID = leaveDays.leaveID
        this.employeeID = leaveDays.employeeID
        this.daysLeft = leaveDays.daysLeft
        this.activeYear = leaveDays.activeYear
    }
    static async createDefault(id,conn){
        const dbConn = conn || databaseConfig
        const response = await Leaves.getAll()
        const sql = `INSERT INTO leavedays(leaveID, employeeID, activeYear) VALUES`
        response.forEach(row=> `${sql} (${row.leavesID}, ${id}, CURDATE())`)
        return await dbConn.query(sql)
    }
    async reduceDays(days,conn){
        const dbConn = conn || databaseConfig
        const [rows] = await dbConn.execute(`SELECT leaveDaysID FROM leavedays WHERE `)
    }
}

export default LeaveDays