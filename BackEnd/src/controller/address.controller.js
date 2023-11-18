import Address from "../models/address.model.js";
import databaseConn from "../../database.config.js";

export default class AddressController{
    static getAll = (req,res)=>{
        Address.getAll(Result=>res.send(Result))
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