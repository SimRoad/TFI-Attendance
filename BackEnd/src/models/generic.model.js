import databaseConn from '../../database.config.js'

/**
 * @class The parent of all models. Contains most of the basic queries including:
 * 
 * - Select *
 * 
 * - Create
 * 
 * - Update
 * 
 * This is general purpose so if there are any nuances, create the solution through the child, maybe through override or other methods. Do not instantiate this class.
 * 
 * (Note: I think this can be turned into abstract?? Maybe it can be an interface? Contact me if you found anything)
 * @prop {string} tableName
 * @prop {string[]} fields
 * @author LaurenceTest
 */
export default class GenericModel{
    tableName = null
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
    /**
     * @method Queries all of the columns of all of the members of the table. It can be dangerous to query everything so as much as possible don't use this.
     * @returns {string} Returns a success or error message
     */
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
    /**
     * @static
     * @method Queries all of the column names of the table.
     * @returns {string[]} Returns an array of the table's column names.
     */
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
     * @param {string[]} values An array that contains the values of the table's contents. It is important that it will have the same order as the {@link getAll} method.
     * 
     * Index 0 will be ignored as it is the ID and will not be inserted.
     * @method Creates a new member of the table
     * @returns {string} Returns a success or error message
     */
    static create(values,res){
        let fields = this.fields
        fields.splice(0,1)
        console.log(values)
        databaseConn.getConnection((err,conn)=>{
            if(err){
                console.error(err)
                conn.release()
            }
            else conn.execute(`INSERT INTO ${this.tableName}(${this.fields.join(`, `)}) VALUES(${values.map(() => '?').join(', ')})`,values,(error, results)=>{
                conn.release()
                if(error) console.error(error)
                else res(results)
            })
        })
    }
    //Index 0 in WHERE relies that its always the table ID
    //Its a bit hacky, will break if boilerplate changes
    /**
     * @method
     * @param {number} id ID of the targeted member
     * @param {string[]} fields Column names to be updated
     * @param {string[]} values Values corresponding to the column names
     * @returns {string} Returns a success or error message
     */
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