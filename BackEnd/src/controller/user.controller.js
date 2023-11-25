import Employee from '../models/employee.model.js'
import User from '../models/user.model.js'

export default class UserController{
    static async findAll(req,res,next){
        res.send(await User.getAll().catch(err=>next(err)))
    }
    static async findByID(req,res,next){
        res.send(await User.getID(req.params.id).catch(err=>next(err)))
    }
    static async getFieldNames(req,res){
        res.send(await User.getFields().catch(err=>next(err)))
    }
    static async create(req,res,next){
        try {
            if(req.body.employee){
                const newEmployee = new Employee(req.body.employee)
                newEmployee.create().then(response=>req.body.user.employeeID = response.insertID).catch(err=>{throw(err)})
            }
            else if(req.body.user.employeeID && (await Employee.getID(req.body.user.employeeID)).length){
                const newUser = new User(req.body.user)
                await newUser.encryptPassword()
                res.send(await newUser.create())
            }
            else throw Error(`Employee ID does not exist`)
        } catch (error){
            next(error)
        }
    }
    static async update(req,res,next){
        try {
            const updateUser = new User(req.body.user)
            res.send(await updateUser.update())
        } catch (error) {
            next(error);
        }
    }
    static async login(req,res,next){
        try {
            req.body.userPassword = req.body.password
            const user = new User(req.body)
            const result = await user.verifyLogin()
            if(result.authentication) req.session.userID = result.userID
            res.send(result)
        } catch (error) {
            next(error)
        }
    }
}