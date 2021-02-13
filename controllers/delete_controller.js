//require mongoose 
const db = require('../config/mongoose');
// connection to db
const toDoList = require('../models/to_do_list');

// find and delete the element by id
module.exports.delete = function(req, res){
    //store id in id variable from query parems
    let id = req.query.id;
    // find and delete the task
    toDoList.findByIdAndDelete(id,function(err){
        if(err){
            console.log('Error in deleting an object from DB');
            return;
        }
        // redirect back to the same page
        return res.redirect('back');
    });
}