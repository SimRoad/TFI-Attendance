import databaseConn from '../../database.config.js'
import GenericModel from './generic.model.js'

export default class Employee extends GenericModel{
    static tableName = 'employee'
    static fields = [
        "employeeID",
        "addressID",
        "firstName",
        "middleName",
        "lastName",
        "birthDate",
        "jobPosition",
        "currentStatus",
        "contactNumber",
        "email"
    ]
    constructor(employee){
        super()
        this.table = {
            name: Employee.tableName,
            fields: Employee.fields
        }
        this.employeeID = employee.employeeID
        this.addressID = employee.addressID
        this.firstName = employee.firstName
        this.middleName = employee.middleName
        this.lastName = employee.lastName
        this.birthdate = employee.birthDate ? new Date(employee.birthDate) : undefined
        this.jobPosition = employee.jobPosition
        this.currentStatus = employee.currentStatus
        this.contactNumber = employee.contactNumber
        this.email = employee.email
    }
}