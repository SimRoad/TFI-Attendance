import databaseConn from '../../database.config.js'
import GenericModel from './generic.model.js'

export default class Logs extends GenericModel{
    static tableName = 'logs'
    static fields = ["logID","generatedBy","dateGenerated","changesDesc"]
    constructor(Logs){
        this.logID = Logs.logID
        this.generatedBy = Logs.generatedBy
        this.dateGenerated = Logs.dateGenerated
        this.changesDesc = Logs.changesDesc
    }
}
