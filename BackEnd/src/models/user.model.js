import dbConn from './db.config.js'

var Employee = function(employee){
    this.userID = employee.userID;
    this.employeeID = employee.employeeID;
    this.username = employee.userName;
    this.userPassword = employee.userPassword;
    this.position = employee.position;
    this.lastLogin = employee.lastLogin
    this.email = employee.email;
}