import dbConn from './db.config.js'
import * as Employee from "employee.model.js";

exports.findAll = function(req,res){
    Employee.findAll(function(err,employee){
        console.log('controller')
        if(err){
            res.send(err);
        }
        console.log('res',employee);
        res.send({status: 200, data: employee})
    })
}
