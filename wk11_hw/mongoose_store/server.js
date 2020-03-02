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

//seed route
app.get('/store/seed', async (req, res) => {
    const newProducts =
      [
        {
          name: 'Beans',
          description: 'A small pile of beans. Buy more beans for a big pile of beans.',
          img: 'https://cdn3.bigcommerce.com/s-a6pgxdjc7w/products/1075/images/967/416130__50605.1467418920.1280.1280.jpg?c=2',
          price: 5,
          qty: 99
        }, {
          name: 'Bones',
          description: 'It\'s just a bag of bones.',
          img: 'http://bluelips.com/prod_images_large/bones1.jpg',
          price: 25,
          qty: 0
        }, {
          name: 'Bins',
          description: 'A stack of colorful bins for your beans and bones.',
          img: 'http://www.clipartbest.com/cliparts/9cz/rMM/9czrMMBcE.jpeg',
          price: 7000,
          qty: 1
        }
      ]
  
    try {
      const seedItems = await Product.create(newProducts)
      res.send(seedItems)
    } catch (err) {
      res.send(err.message)
    }
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

//edit
app.get('/store/:id/edit', (req, res)=> {
    Product.findById(req.params.id, (err, foundProduct) => {
        res.render('edit.ejs', {product: foundProduct})
    })  
})

//PUT/update
app.put('/store/:id', (req, res)=>{
    Product.findByIdAndUpdate(req.params.id, req.body, 
        {new: true}, (err, updatedModel) => {
            res.redirect('/store')
    })
})


// WEB SERVER //
// Load up the express web server. IMPORTANT: Always do this at the end of your server.js:
app.listen(port, () => {
    console.log("listening on port", port);
  });