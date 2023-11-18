import databaseConn from '../../database.config.js'
import Employee from "../models/employee.model.js";

//Maybeee it could be something else other than a class, contact me @LaurenceTest

export default class EmployeeController{
    static findAll = (req, res)=>{
        res.send({status:200})
    }
    static getColumnNames = (req,res)=>{
        databaseConn.getConnection((err,conn)=>{
            if(err){
                console.error(err)
                return
            }
            console.log('CONNECTION ESTABLISHED 😱');
            conn.query('SELECT * FROM employee',(error,results,fields)=>{
                conn.release()
                
                if(err){
                    console.error(err)
                    return
                }
                console.log('QUERY WORKED???!?! 😱');

                res.send(fields.map(a=>a.name))
            })
        })
    }
}
