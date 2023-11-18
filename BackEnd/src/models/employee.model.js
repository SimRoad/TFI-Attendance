import databaseConn from '../../database.config.js'
import GenericModel from './generic.model.js'

export default class Employee extends GenericModel{
    tableName = 'employee'
    fields = this.getFields()
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
    
}