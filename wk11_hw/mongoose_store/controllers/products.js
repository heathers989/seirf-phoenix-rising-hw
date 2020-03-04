const express = require('express');
const router = express.Router();
const Product = require('../models/products.js')

//Routes: 
//seed route
// app.get('/store/seed', (req, res)=>{

// })

//New
router.get('/new', (req, res) => {
    res.render('new.ejs')
})

//Create
router.post('/', (req, res) =>{
    Product.create(req.body, (error, createdProduct)=> {
        console.log(createdProduct)
        res.redirect('/store')
    })
})

//seed route
router.get('/seed', async (req, res) => {
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
router.get('/', (req, res) => {
    Product.find({}, (error, allProducts)=> {
        res.render('index.ejs', {
            products: allProducts
        })
    })
})

//show
router.get('/:id', (req, res) => {
    Product.findById(req.params.id, (err, foundProduct)=> {
        res.render('show.ejs', { product: foundProduct})
    })
})

//edit
router.get('/:id/edit', (req, res)=> {
    Product.findById(req.params.id, (err, foundProduct) => {
        res.render('edit.ejs', {product: foundProduct})
    })  
})


router.put('/:id/buy', (req, res) => {
    Product.findByIdAndUpdate( req.params.id , { $inc : {qty : -1}}, (err, product) => {
        res.redirect(`/store/${req.params.id}`)
    })
            
})

//PUT/update
router.put('/:id', (req, res)=>{
    
    Product.findByIdAndUpdate(req.params.id, req.body, 
        {new: true}, 
              (err, updatedModel) => {
            res.redirect(`/store/${req.params.id}`)
    })
})

//delete
router.delete('/:id', (req, res)=>{
    Product.findByIdAndRemove(req.params.id, (err, data) =>{
        res.redirect('/store')
    })
})

module.exports = router