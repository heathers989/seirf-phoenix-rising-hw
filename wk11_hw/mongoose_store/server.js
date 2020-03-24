// Load express:
const express = require("express");
const app = express();

// Load methodOverride middleware so you can make delete, put, and
// patch requests from web pages:
// Load methodOverride as middleware to support ?_method=<METHOD> query strings:
const methodOverride = require("method-override");
app.use(methodOverride("_method"));

//connect mongoose
const mongoose = require("mongoose")
mongoose.connect('mongodb://localhost:27017/mongoosestoredb', { useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});


// Load body parser middleware:
app.use(express.urlencoded({ extended: true }));

// Set the web server port:
const port = 3000;


//use public folder for styling
app.use(express.static('public'))

//connect routes from controller folder
const storeController = require('./controllers/products.js')
app.use('/store', storeController)

//root redirect
app.get('/', (req, res) => {
  res.redirect('/store')
})



// WEB SERVER //
// Load up the express web server. IMPORTANT: Always do this at the end of your server.js:
app.listen(port, () => {
    console.log("listening on port", port);
  });