// Load express:
const express = require("express");
const app = express();



//connect mongoose
const mongoose = require("mongoose")
mongoose.connect('mongodb://localhost:27017/mongoosestoredb', { useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

// Set the web server port:
const port = 3000;

// Load methodOverride middleware so you can make delete, put, and
// patch requests from web pages:
const methodOverride = require("method-override");

//use public folder for styling/outside code
app.use(express.static('public'))

const storeController = require('./controllers/products.js')
app.use('/store', storeController)

// Load body parser middleware:
app.use(express.urlencoded({ extended: false }));

// Load methodOverride as middleware to support ?_method=<METHOD> query strings:
app.use(methodOverride("_method"));

const Product = require('./models/products.js')


app.get('/', (req, res) => {
  res.redirect('/store')
})



// WEB SERVER //
// Load up the express web server. IMPORTANT: Always do this at the end of your server.js:
app.listen(port, () => {
    console.log("listening on port", port);
  });