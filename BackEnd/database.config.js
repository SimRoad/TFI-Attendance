import mysql from 'mysql2'

/**
 * @type {mysql.Connection}
 */
const databaseConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'attendancemgmtsys'
})

databaseConn.connect(err=>{
    err ? console.log("Successfully Connected to the Database") : console.warn("Failed to connect to the database")
})

export default databaseConn