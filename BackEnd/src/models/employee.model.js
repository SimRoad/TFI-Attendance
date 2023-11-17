import databaseConn from '../../database.config.js'

class Employee{
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
        this.fields = ()=>{
            databaseConn.query(`SELECT * FROM employee`,(error,results,field)=>{
                if(error) return error
                else return field.map(a=>a.name)
            })
        }
    }
    getAll(){
        databaseConn.query(`SELECT * FROM employee`,(error,results)=>{
            if(error) return error
            else return results
        })
    }
    create(){
        databaseConn.query(`INSERT`)
    }
}

export default Employee