import databaseConn from '../../database.config.js'
import GenericModel from './generic.model.js'

class Reason extends GenericModel{
    constructor(Reason){
        this.reasonID = Reason.reasonID
        this.sessionID = Reason.sessionID
        this.reason = Reason.reason
    }
}

export default Reason