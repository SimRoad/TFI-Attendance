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
    /**
     * @method Queries all of the columns of all of the members of the table. It can be dangerous to query everything so as much as possible don't use this.
     * @returns {string} Returns a success or error message
     */
    static getAll(send){
        databaseConn.getConnection((err,conn)=>{
            if(err) console.error(err)
            else conn.query('SELECT * FROM employee',(error,results,fields)=>{
                conn.release()
                if(err) console.error(err)
                else send(results)
            })
        })
    }
    /**
     * @static
     * @method Queries all of the column names of the table.
     * @returns {string[]} Returns an array of the table's column names.
     */
    static getFields(send){
        databaseConn.getConnection((err,conn)=>{
            if(err) console.error(err)
            else conn.query('SELECT * FROM employee',(error,results,fields)=>{
                conn.release()
                if(err) console.error(err)
                else send(fields.map(a=>a.name))
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
    static create(values){
        databaseConn.execute(`INSERT INTO ${this.tableName}(${this.fields.forEach(field=>field + ",")}) VALUES(${this.fields.forEach(field=>field + " = ?,")})`,values,(error, results)=>{
            if(error) return `ERROR: ${error}`
            else return results
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
    static update(id,fields,values){
        databaseConn.execute(`UPDATE ${this.tableName} SET ${fields.forEach(field=>{return `${field} = ?, `})}WHERE ${this.fields[0]} = ${id}`,values,(error,results)=>{
            if(error) return `ERROR: ${error}`
            else return results
        })
    }
}