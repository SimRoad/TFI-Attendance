import databaseConn from '../../database.config.js'

class Logs{
    constructor(Logs){
        this.logID = Logs.logID
        this.generatedBy = Logs.generatedBy
        this.dateGenerated = Logs.dateGenerated
        this.changesDesc = Logs.changesDesc
    }
}

export default Logs