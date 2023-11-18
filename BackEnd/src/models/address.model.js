import databaseConn from "../../database.config.js";
import GenericModel from "./generic.model.js";

export default class Address extends GenericModel{
    static tableName = 'address'
    static fields = ["addressID","street","district","barangay","postalCode","city_municipality","province"]
    constructor(Address){
        this.addressID = Address.addressID
        this.street = Address.street
        this.district = Address.district
        this.barangay = Address.barangay
        this.postalCode = Address.postalCode
        this.city_municipality = Address.city_municipality
        this.province = Address.province
    }
}
