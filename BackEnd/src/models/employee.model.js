import databaseConn from '../../database.config.js'
import GenericModel from './generic.model.js'

export default class Employee{
    tableName = 'employee'
    fields = super.getFields()
    constructor(employee){
        this.employeeID = employee.employeeID
        this.firstName = employee.firstName
        this.middleName = employee.middleName ?? null
        this.lastName = employee.lastName
        this.birthdate = new Date(employee.birthDate)
        this.address = employee.address
        this.position = employee.jobPosition
        this.status = employee.currentStatus
        this.contactNumber = employee.contactNumber
        this.email = employee.email
    }
    /**
     * @method Queries all of the columns of all of the members of the table. It can be dangerous to query everything so as much as possible don't use this.
     * @returns {string} Returns a success or error message
     */
    static getAll(){
        databaseConn.query(`SELECT * FROM ${table.tableName}`,(error,results)=>{
            if(error) console.error(error)
            else return results
        })
    }
    /**
     * @method Queries all of the column names of the table.
     * @returns {string[]} Returns an array of the table's column names.
     */
    static getFields(){
        databaseConn.query(`SELECT * FROM ${this.tableName}`,(error,results,fields)=>{
            if(error) console.error(error)
            else return fields.map(a=>a.name)
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
            if(error) console.error(error)
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
            if(error) console.error(error)
            else return results
        })
    }
}