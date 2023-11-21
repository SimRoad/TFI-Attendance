import mysql from 'mysql2'
import db from 'mysql2-async'

/**
 * @type {mysql.Pool}
 */
export const databaseConnSync = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'attendancemgmtsys',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

const databaseConn = new db({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'attendancemgmtsys',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    skiptzfix: true
})

export default databaseConn