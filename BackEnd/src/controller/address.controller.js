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
    static create = (req,res)=>{
        Address.create(keys.map(key=>String(req.query[key])),response=>{
            res.send(response)
        })
    }
}