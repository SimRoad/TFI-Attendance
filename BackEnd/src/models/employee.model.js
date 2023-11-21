import GenericModel from './generic.model.js'

export default class Employee extends GenericModel{
    static tableName = 'employee'
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
        super()
        this.table = {
            name: Employee.tableName,
            fields: Employee.fields
        }
        this.employeeID = employee.employeeID
        this.firstName = employee.firstName
        this.middleName = employee.middleName
        this.lastName = employee.lastName
<<<<<<< HEAD
        this.birthDate = new Date(employee.birthDate)
=======
        this.addressID = employee.addressID
        this.birthdate = new Date(employee.birthDate)
>>>>>>> 18aee388bfd9dc39d071bed9a66ff7415e122f06
        this.jobPosition = employee.jobPosition
        this.currentStatus = employee.currentStatus
        this.contactNumber = employee.contactNumber
        this.email = employee.email
    }
}