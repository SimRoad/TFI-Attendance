import databaseConn from '../../database.config.js'
import {databaseConnSync} from '../../database.config.js'

/**
 * @class
 * @exports
 * @description Contains the core methods of the data models. Has the basic methods such as:
 * - Select All
 * - Select by ID
 * - Get Column Names
 * - Create
 * - Update
 */
export default class GenericModel{
    /**@deprecated */
    static getIDSync(id,res){
        databaseConnSync.getConnection((err,conn)=>{
            if(err){
                console.error(err)
                conn.release()
            }
            else conn.execute(`SELECT * FROM ${this.tableName} WHERE ${this.fields[0]} = ?`,[String(id)],(error,results)=>{
                conn.release()
                if(error) console.error(error)
                else res(results)
            })
        })
    }
    static async getID(id){
        try {
            return await databaseConn.query(`SELECT * FROM ${this.tableName} WHERE ${this.fields[0]} = ?`,[String(id)],{saveAsPrepared:true})
        } catch (error) {
            console.error(error)
            throw(error)
        }
    }
    static getAllSync(res){
        databaseConnSync.getConnection((err,conn)=>{
            if(err){
                console.error(err)
                if(err.errno !== -4078) conn.release()
            }
            else conn.query(`SELECT * FROM ${this.tableName}`,(error,results,fields)=>{
                conn.release()
                if(error) console.error(error)
                else res(results)
            })
        })
    }
    static async getAll(){
        try {
            return await databaseConn.query(`SELECT * FROM ${this.tableName}`)
        } catch (error) {
            console.error(error)
            throw(error)
        }
    }
    static getFieldsSync(res){
        databaseConnSync.getConnection((err,conn)=>{
            if(err){
                console.error(err)
                if(err.errno !== -4078) conn.release()
            }
            else conn.query(`SELECT * FROM ${this.tableName}`,(error,results,fields)=>{
                conn.release()
                if(error) console.error(error)
                else res(fields.map(a=>a.name))
            })
        })
    }
    static async getFields(){
        try {
            let results = await databaseConn.query(`DESCRIBE ${this.tableName}`)
            return results.map(a=>a.Field)
        } catch (error) {
            console.error(error)
            throw(error)
        }
    }
    createSync(res,error){
        const values = Object.values(this).map(value=>value ?? null).slice(2)
        const fields = this.table.fields.slice(1)
        databaseConnSync.getConnection((err,conn)=>{
            if(err){
                error(err)
                if(err.errno !== -4078) conn.release()
            }
            else {
                conn.execute(`INSERT INTO ${this.table.name}(${fields.join(`, `)}) VALUES(${values.map(() => '?').join(', ')})`,values,(err, results)=>{
                    conn.release()
                    if(err){
                        error(err)
                    }
                    else {
                        console.log(`${this.table.name} ID ${results.insertId} has been successfully inserted.`)
                        res(results)
                    }
                })
            }
        })
    }
    async create(){
        try {
            const values = Object.values(this).map(value=>value ?? null).slice(2)
            const fields = this.table.fields.slice(1)
            return await databaseConn.query(`INSERT INTO ${this.table.name}(${fields.join(`, `)}) VALUES(${values.map(() => '?').join(', ')})`,values,{saveAsPrepared:true})
        } catch (error) {
            console.error(error)
            throw(error)
        }
    }
    updateSync(res,error){
        const values = Object.values(this).filter(value=>value !== undefined).slice(1)
        const fields = this.table.fields.filter(field=>this[field] !== undefined).slice(1)
        databaseConnSync.getConnection((err,conn)=>{
            if(err){
                error(err)
                if(err.errno !== -4078) conn.release()
            }
            else conn.execute(`UPDATE ${this.table.name} SET ${fields.map(field=>`${field} = ?`)} WHERE ${this.table.fields[0]} = ${values.splice(0,1)}`,values,(err,results)=>{
                if(err) error(err)
                else{
                    console.log(`${this.table.name} ID ${results.insertId} has been successfully updated.`)
                    res(results)
                } 
            })
        })
    }
    async update(){
        try {
            const values = Object.values(this).filter(value=>value !== undefined).slice(1)
            const fields = this.table.fields.filter(field=>this[field] !== undefined).slice(1)
            return await conn.query(`UPDATE ${this.table.name} SET ${fields.map(field=>`${field} = ?`)} WHERE ${this.table.fields[0]} = ${values.splice(0,1)}`,values,{saveAsPrepared:true})
        } catch (error) {
            console.error(error)
            throw(error)
        }
    }
}