import GenericModel from './generic.model.js'

export default class Employee extends GenericModel{
    static fields = [
        "employeeID",
        "firstName",
        "middleName",
        "lastName",
        "gender",
        "civilStatus",
        "addressID",
        "birthDate",
        "jobPosition",
        "currentStatus",
        "contactNumber",
        "email"
    ]
    constructor(employee){
        super()
        this.firstName = employee.firstName
        this.middleName = employee.middleName
        this.lastName = employee.lastName
        this.gender = employee.gender
        this.civilStatus = employee.civilStatus
        this.addressID = employee.addressID
        this.birthDate = employee.birthDate ? new Date(employee.birthDate) : undefined
        this.jobPosition = employee.jobPosition
        this.currentStatus = employee.currentStatus
        this.contactNumber = employee.contactNumber
        this.email = employee.email
    }
}