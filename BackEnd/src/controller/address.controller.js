import Address from "../models/address.model.js";
import databaseConn from "../../database.config.js";

export default class AddressController{
    static findAll = (req,res)=>{
        Address.getAll(Result=>res.send(Result))
    }
    static findByID = (req,res)=>{
        Address.getID(req.query.id,response=>res.send(response))
    }
    static getFieldNames = (req,res)=>{
        Address.getFields(fields=>res.send(fields))
    }
    static create = (req,res,next)=>{
        const newAddress = new Address(req.body.address)
        newAddress.create(response=>res.send(response),error=>next(error))
    }
    static update = (req,res,next)=>{
        const updateAddress = new Address(req.body.address)
        updateAddress.update(response=>res.send(response),error=>next(error))
    }
}