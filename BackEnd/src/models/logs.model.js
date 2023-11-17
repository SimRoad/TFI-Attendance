import databaseConn from '../../database.config.js'
import GenericModel from './generic.model.js'

class Logs extends GenericModel{
    constructor(Logs){
        this.logID = Logs.logID
        this.generatedBy = Logs.generatedBy
        this.dateGenerated = Logs.dateGenerated
        this.changesDesc = Logs.changesDesc
    }
}

export default Logs