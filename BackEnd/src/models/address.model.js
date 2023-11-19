import databaseConn from "../../database.config.js";
import GenericModel from "./generic.model.js";

export default class Address extends GenericModel{
    static tableName = 'address'
    static fields = ["addressID","street","district","barangay","postalCode","city_municipality","province"]
    constructor(address){
        super()
        this.table = {
            name: Address.tableName,
            fields: Address.fields
        }
        this.addressID = address.addressID
        this.street = address.street
        this.district = address.district
        this.barangay = address.barangay
        this.postalCode = address.postalCode
        this.city_municipality = address.city_municipality
        this.province = address.province
    }
}
