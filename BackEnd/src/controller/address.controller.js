import Address from "../models/address.model.js";
import databaseConn from "../../database.config.js";
import Holidays from "../models/holidays.model.js";

export default class AddressController{
    static async findAll(req,res,next){
        res.send(await Address.getAll().catch(err=>next(err)))
    }
    static async findByID(req,res){
        res.send(await Address.getID(req.params.id).catch(err=>next(err)))
    }
    static async getFieldNames(req,res){
        res.send(await Address.getFields().catch(err=>next(err)))
    }
    static async create(req,res,next){
        const newAddress = new Address(req.body.address)
        res.send(await newAddress.create().catch(err=>next(err)))
    }
    static async update(req,res,next){
        const updateAddress = new Address(req.body.address)
        res.send(await updateAddress.update())
    }
    
}