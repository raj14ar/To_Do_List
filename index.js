// require the express
const express = require('express');
// require path
const path = require('path');
// specify the port
const port = 8000;

// require mongoose
const db = require('./config/mongoose');
// connection to database
const toDoList = require('./models/to_do_list');

//  create object of express class(puts new Express application inside the app)
const app = express();

//setting the templete engine(view engine)
app.set('view engine', 'ejs');
// specify the path to view engine
app.set('views', path.join(__dirname,'views'));

//parsing of objects from url
app.use(express.urlencoded({extended: true }));

// path to resource file such as css, images, javascript, etc
app.use(express.static('assets'));

// middleware for the coversion of month number to name
app.use(function(req,res,next){
        var cal={
            1: "JAN",
            2: "FEB",
            3: "MAR",
            4: "APR",
            5: "MAY",
            6: "JUN",
            7: "JUL",
            8: "AUG",
            9: "SEP",
            10: "OCT",
            11: "NOV",
            12: "DEC"
        }
        var d = new Date(req.body.date);
        var yyyy=d.getFullYear();
        var mm=d.getMonth();
        var dd= d.getDate();
        req.body.date=cal[mm+1]+" "+dd+","+yyyy;
        if(req.body.category==""){
            req.body.category=""
        }
        next();
    });

// middleware to navigate to the specific routes
app.use('/', require('./routes'));


// express to listen to the specified port number
app.listen(port,function(err){
    if(err){
        console.log('Error in running server',err);
        return;
    }
    console.log('Server is running on port',port);
})