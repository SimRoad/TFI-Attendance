import databaseConn from '../../database.config.js'
import GenericModel from './generic.model.js';

export default class User extends GenericModel{
    static tableName = 'user'
    static fields = ["userID","employeeID","userPassword","position","lastLogin","email"]
    constructor(user){
        super()
        this.table = {
            name: User.tableName,
            fields: User.fields
        }
        this.userID = user.userID;
        this.employeeID = user.employeeID;
        this.userPassword = user.userPassword;
        this.position = user.position;
        this.lastLogin = user.lastLogin
        this.email = user.email;
    }
}