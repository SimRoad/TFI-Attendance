import dbConn from './db.config.js'

var Employee = function(employee){
    this.firstname = employee.first_name;
    this.lastname = employee.last_name;
    this.email = employee.email;
    this.contact = employee.contactno;
    this.position = employee.position;
    this.address = employee.address;
    this.birthdate = employee.birthdate;
    this.status = ['Employed','Fired']
}