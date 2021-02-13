//require mongoose library
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
// connection to db
mongoose.connect('mongodb://localhost/to_do_list_db', {useNewUrlParser: true, useUnifiedTopology: true});

// get connection
const db = mongoose.connection;

//handle error
db.on('error', console.error.bind(console, 'connection error:'));

//if connected print the message
db.once('open', function() {
  console.log("we're connected to Db!");
});