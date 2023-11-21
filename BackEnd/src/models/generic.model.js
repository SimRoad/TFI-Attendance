import databaseConn from '../../database.config.js'

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
        databaseConn.getConnection((err,conn)=>{
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
            const [rows,fields] = await databaseConn.execute(`SELECT * FROM ${this.tableName} WHERE ${this.fields[0]} = ?`,[String(id)])
            return rows
        } catch (error) {
            console.error(error)
            throw(error)
        }
    }
    static getAllSync(res){
        databaseConn.getConnection((err,conn)=>{
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
            const [rows,fields] = await databaseConn.query(`SELECT * FROM ${this.tableName}`)
            console.log(rows)
            return rows
        } catch (error) {
            console.error(error)
            throw(error)
        }
    }
    static getFieldsSync(res){
        databaseConn.getConnection((err,conn)=>{
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
            let [rows,fields] = await databaseConn.execute(`SELECT * FROM \`${this.tableName}\``)
            console.log(fields)
            return fields.map(field=>field.name)
        } catch (error) {
            console.error(error)
            throw(error)
        }
    }
    createSync(res,error){
        const values = Object.values(this).map(value=>value ?? null).slice(2)
        const fields = this.table.fields.slice(1)
        databaseConn.getConnection((err,conn)=>{
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
            const values = Object.values(this).filter(val=>val !== undefined).slice(1)
            const fields = this.table.fields.slice(1).filter((field,index)=>this[field] !== undefined || this[field] instanceof Date)
            const [response] = await databaseConn.execute(`INSERT INTO ${this.table.name}(${fields.join(`, `)}) VALUES(${values.map(() => '?').join(', ')})`,values)
            return response
        } catch (error) {
            console.error(error)
            throw(error)
        }
    }
    updateSync(res,error){
        const values = Object.values(this).filter(value=>value !== undefined).slice(1)
        const fields = this.table.fields.filter(field=>this[field] !== undefined).slice(1)
        databaseConn.getConnection((err,conn)=>{
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
            const [response] = await databaseConn.query(`UPDATE ${this.table.name} SET ${fields.map(field=>`${field} = ?`)} WHERE ${this.table.fields[0]} = ${values.splice(0,1)}`,values)
            return response
        } catch (error) {
            console.error(error)
            throw(error)
        }
    }
}