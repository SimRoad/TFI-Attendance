import databaseConn from '../../database.config.js'
import GenericModel from './generic.model.js';

export default class User extends GenericModel{
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