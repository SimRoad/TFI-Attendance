import databaseConn from '../../database.config.js'

class GenericModel{
    constructor(){}
    getAll(){
        databaseConn.query(`SELECT * FROM ${table.tableName}`,(error,results)=>{
            if(error) console.error(error);
            else return results
        })
    }
    getFields(){
        databaseConn.query(`SELECT * FROM ${table.tableName}`,(error,results,fields)=>{
            if(error) console.error(error);
            else return fields
        })
    }
    /**
     * 
     * @param {string[]} data Field values (Must be in order)
     */
    create(values){
        databaseConn.execute(`INSERT INTO ${this.tableName}(${this.fields.forEach(field=>field + ",")}) VALUES(${this.fields.forEach(field=>field + " = ?,")})`,values,(error, results)=>{
            if(error) return `ERROR: ${error}`
            else return results
        })
    }
    //Index 0 in WHERE relies that its always the table ID
    //Its a bit hacky, will break if boilerplate changes
    update(id,fields,values){
        databaseConn.execute(`UPDATE ${this.tableName} SET ${fields.forEach((field,index)=>{return `${field} = ${values[index]} WHERE ${this.fields[0]} = ${id}`})}`)
    }
    
}

export default GenericModel