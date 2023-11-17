import databaseConn from '../../database.config.js'

class Reason{
    constructor(Reason){
        this.reasonID = Reason.reasonID
        this.sessionID = Reason.sessionID
        this.reason = Reason.reason
    }
}

export default Reason