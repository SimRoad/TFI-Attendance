import * as mysql from 'mysql2'

'use strict'

const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'attendancemgmtsys'
})

dbConn.connect(err=>{
    err ? console.log("Successfully Connected to the Database") : console.warn("Failed to connect to the database")
})

module.exports = dbConn