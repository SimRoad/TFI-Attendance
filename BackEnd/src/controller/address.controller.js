import Address from "../models/address.model.js";

export default class AddressController{
    static async findAll(req,res,next){
        res.json(await Address.getAll().catch(err=>next(err)))
    }
    static async findByID(req,res){
        res.json(await Address.getID(req.params.id).catch(err=>next(err)))
    }
    static async getFieldNames(req,res){
        res.json(await Address.getFields().catch(err=>next(err)))
    }
    static async create(req,res,next){
        try {
            const newAddress = new Address(req.body.address)
            res.json(await newAddress.create())
        } catch (error) {
            next(error)
        }
    }
    static async update(req,res,next){
        try {
            const updateAddress = new Address(req.body.address)
            res.json(await updateAddress.update())
        } catch (error) {
            next(error)
        }
    }
    
}