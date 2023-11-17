import databaseConn from '../../database.config.js'
import GenericModel from './generic.model.js'

class Employee extends GenericModel{
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
        this.tableName = 'employee'
        this.fields = ()=>{
            databaseConn.query(`SELECT * FROM employee`,(error,results,fields)=>{
                if(error) return error
                else return fields.map(a=>a.name).filter(a=>{return a != 'employeeID'})
            })
        }
    }
    
}

export default Employee