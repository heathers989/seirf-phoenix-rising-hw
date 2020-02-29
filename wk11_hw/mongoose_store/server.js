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


// Load body parser middleware:
app.use(express.urlencoded({ extended: false }));

// Load methodOverride as middleware to support ?_method=<METHOD> query strings:
app.use(methodOverride("_method"));

const Product = require('./models/products.js')

//Routes:

//seed route
// app.get('/store/seed', (req, res)=>{

// })

//New
app.get('/store/new', (req, res) => {
    res.render('new.ejs')
})

//Create
app.post('/store/', (req, res) =>{
    Product.create(req.body, (error, createdProduct)=> {
        console.log(createdProduct)
        res.redirect('/store')
    })
})

//Index
app.get('/store', (req, res) => {
    Product.find({}, (error, allProducts)=> {
        res.render('index.ejs', {
            products: allProducts
        })
    })
})

//show
app.get('/store/:id', (req, res) => {
    Product.findById(req.params.id, (err, foundProduct)=> {
        res.render('show.ejs', { product: foundProduct})
    })
})


// WEB SERVER //
// Load up the express web server. IMPORTANT: Always do this at the end of your server.js:
app.listen(port, () => {
    console.log("listening on port", port);
  });