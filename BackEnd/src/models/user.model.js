import bcrypt from 'bcrypt'
import GenericModel from './generic.model.js'
import databaseConfig from '../../database.config.js'

export default class User extends GenericModel{
    static fields = ["userID","employeeID","userPassword","position","lastLogin","email"]
    constructor(user){
        super()
        this.employeeID = user.employeeID
        this.userPassword = user.userPassword
        this.position = user.position
        this.lastLogin = user.lastLogin
        this.email = user.email
    }
    async verifyLogin(){
        const [rows] = await databaseConfig.execute(`SELECT email, userPassword FROM user WHERE email = ?`, [this.email])
        return rows.length && await this.comparePassword(rows[0].userPassword)
    }
    async encryptPassword(){
        this.userPassword = await bcrypt.hash(this.userPassword,await bcrypt.genSalt())
    }
    async comparePassword(encryptedPass){
        return await bcrypt.compare(this.userPassword,encryptedPass)
    }
}