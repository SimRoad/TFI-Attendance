import GenericModel from './generic.model.js'
import databaseConfig from '../../database.config.js'

export default class Leaves extends GenericModel{
    static fields = ["leaveID","employeeID","leaveName","daysLeft"]
    constructor(leaves){
        super()
        this.employeeID = leaves.employeeID
        this.leaveName = leaves.leaveName
        this.daysLeft = leaves.daysLeft
    }
    static async createDefault(id,conn){
        const sql = `INSERT INTO leaves(employeeID,leaveName,daysLeft) VALUES
        (${id},'Sick Leave',5),
        (${id},'Maternal Leave',105),
        (${id},'Paternity Leave',7),
        (${id},'Parental Leave',7),
        (${id},'Special Leave for Women',62),
        (${id},'Victims of Violence Leave',10),
        (${id},'Bereavement Leave',10)
        `
        const dbConn = conn || databaseConfig
        return await dbConn.query(sql)
    }
}
