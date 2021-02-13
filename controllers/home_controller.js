//require mongoose 
const db = require('../config/mongoose');
// connection to db
const toDoList = require('../models/to_do_list');

// fatch all the task from the database
module.exports.home = function(req, res){
    toDoList.find({},function(err,lists){
        if(err){
            console.log('Error in faching  from DB');
            return;
        }
        //rander all the task using ejs view engine
        return res.render('home',{ 
            title : "To Do List",
            to_do_list: lists
        });
    });
}