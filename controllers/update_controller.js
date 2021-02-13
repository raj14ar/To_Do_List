//require mongoose 
const { Template } = require('ejs');
const db = require('../config/mongoose');
// connection to db
const toDoList = require('../models/to_do_list');

//find the task by id and update it if task is completed or not completed
module.exports.update = function(req, res){
    let id = req.query.id;
    toDoList.findById (id,function(err,task){
        task.isCompleted=!task.isCompleted;
        task.save(function (err, updatedTodo) {
            if (err) {
                console.log('Error in updating the task!');
              return;
            }
            return res.redirect('back');
    });
    });
}