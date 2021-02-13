// require express
const express = require('express');
//  create object of express class(puts new Express application inside the app)
const app = express();
// require mongoose 
const db = require('../config/mongoose');
const toDoList = require('../models/to_do_list');

// create and add new task in todo list database
module.exports.create = function(req, res){
    toDoList.create({
        description: req.body.description,
        category:req.body.category,
        date: req.body.date
    },function(err, newTask){
        if(err){console.log('Error in adding the task!');
    return; 
}
    // console.log('****New Task****',newTask);
    //redirect the response back
    res.redirect('back');
    });
}
