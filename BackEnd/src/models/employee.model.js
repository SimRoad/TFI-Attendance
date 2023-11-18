import databaseConn from '../../database.config.js'
import GenericModel from './generic.model.js'

export default class Employee extends GenericModel{
    static tableName = 'employee'
    //this is a local list. Check latest through getFields()
    static fields = [
        "employeeID",
        "firstName",
        "middleName",
        "lastName",
        "addressID",
        "birthDate",
        "jobPosition",
        "currentStatus",
        "contactNumber",
        "email"
    ]
    constructor(employee){
        this.employeeID = employee.employeeID
        this.addressID = employee.addressID
        this.firstName = employee.firstName
        this.middleName = employee.middleName ?? null
        this.lastName = employee.lastName
        this.birthdate = new Date(employee.birthDate)
        this.position = employee.jobPosition
        this.status = employee.currentStatus
        this.contactNumber = employee.contactNumber
        this.email = employee.email
    }
}