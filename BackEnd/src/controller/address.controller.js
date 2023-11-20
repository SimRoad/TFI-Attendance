import Address from "../models/address.model.js";
import databaseConn from "../../database.config.js";

export default class AddressController{
    static findAllSync(req,res){
        Address.getAllSync(response=>res.send(response))
    }
    static findByIDSync(req,res){
        Address.getID(req.query.id,response=>res.send(response))
    }
    static getFieldNamesSync(req,res){
        Address.getFields(fields=>res.send(fields))
    }
    static createSync(req,res,next){
        const newAddress = new Address(req.body.address)
        newAddress.create(response=>res.send(response),error=>next(error))
    }
    static updateSync(req,res,next){
        const updateAddress = new Address(req.body.address)
        updateAddress.update(response=>res.send(response),error=>next(error))
    }
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
        res.send(await updateAddress.update().catch(err=>next(err)))
    }
}