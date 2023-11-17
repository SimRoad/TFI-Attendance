import dbConn from './db.config.js'

class User{
    constructor(user){
        this.userID = user.userID;
        this.employeeID = user.employeeID;
        this.username = user.userName;
        this.userPassword = user.userPassword;
        this.position = user.position;
        this.lastLogin = user.lastLogin
        this.email = user.email;
    }
    create(){}
    findAll(){}
}

export default User