import databaseConn from '../../database.config.js'

export default class GenericModel{
    static getID(id,res){
        databaseConn.getConnection((err,conn)=>{
            if(err){
                console.error(err)
                conn.release()
            }
            else conn.execute(`SELECT * FROM ${this.tableName} WHERE ${this.fields[0]} = ?`,[String(id)],(error,results,fields)=>{
                conn.release()
                if(error) console.error(error)
                else res(results)
            })
        })
    }
    static getAll(res){
        databaseConn.getConnection((err,conn)=>{
            if(err){
                console.error(err)
                conn.release()
            }
            else conn.query(`SELECT * FROM ${this.tableName}`,(error,results,fields)=>{
                conn.release()
                if(error) console.error(error)
                else res(results)
            })
        })
    }
    static getFields(res){
        databaseConn.getConnection((err,conn)=>{
            if(err){
                console.error(err)
                conn.release()
            }
            else conn.query(`SELECT * FROM ${this.tableName}`,(error,results,fields)=>{
                conn.release()
                if(error) console.error(error)
                else res(fields.map(a=>a.name))
            })
        })
    }
    /**
     * 
     * @param {string[]} values Array of values ordered respectively according to the fields
     * @param {callback} res Callback function
     */
    static create(values,res){
        let fields = this.fields.slice(1)
        databaseConn.getConnection((err,conn)=>{
            if(err){
                console.error(err)
                if(err.errno === -4078) conn.release()
            }
            else conn.execute(`INSERT INTO ${this.tableName}(${this.fields.join(`, `)}) VALUES(${values.map(() => '?').join(', ')})`,values,(error, results)=>{
                conn.release()
                if(error) console.error(error)
                else res(results)
            })
        })
    }
    /**
     * 
     * @param {callback} res Callback function
     */
    create(res){
        const values = Object.values(this).filter(value=>value != undefined).slice(1)
        const fields = this.table.fields.slice(1)
        databaseConn.getConnection((err,conn)=>{
            if(err){
                console.error(err)
                if(err.errno === -4078) conn.release()
            }
            else {
                conn.execute(`INSERT INTO ${this.table.name}(${fields.join(`, `)}) VALUES(${values.map(() => '?').join(', ')})`,values,(error, results)=>{
                    conn.release()
                    if(error) console.error(error)
                    else {
                        console.log(`${this.table.name} ID ${results.insertId} has been successfully inserted.`)
                        res(results)
                    }
                })
            }
        })
    }
    static update(id,fields,values,res){
        databaseConn.getConnection((err,conn)=>{
            if(err){
                console.error(err)
                conn.release()
            }
            else conn.execute(`UPDATE ${this.tableName} SET ${fields.forEach(field=>{return `${field} = ?, `})}WHERE ${this.fields[0]} = ${id}`,values,(error,results)=>{
                if(error) console.error(err)
                else res(results)
            })
        })
    }
}