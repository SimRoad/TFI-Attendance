import bcrypt from 'bcrypt'
import GenericModel from './generic.model.js'

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
    async encryptPassword(){
        this.userPassword = await bcrypt.hash(this.userPassword,await bcrypt.genSalt())
        return
    }
    async comparePassword(encryptedPass){
        const bool = await bcrypt.compare(this.userPassword,encryptedPass)
        if(!bool) console.error(bool)
        return bool
    }
}