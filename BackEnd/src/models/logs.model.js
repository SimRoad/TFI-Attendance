import databaseConn from '../../database.config.js'
import GenericModel from './generic.model.js'

export default class Logs extends GenericModel{
    static tableName = 'logs'
    static fields = ["logID","generatedBy","dateGenerated","changesDesc"]
    constructor(logs){
        super()
        this.table = {
            name: Logs.tableName,
            fields: Logs.fields
        }
        this.logID = logs.logID
        this.generatedBy = logs.generatedBy
        this.dateGenerated = logs.dateGenerated
        this.changesDesc = logs.changesDesc
    }
}
