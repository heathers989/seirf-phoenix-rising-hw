const express = require('express');
const app = express();
const port = 3000;

const budget = require('./models/budget.js');

app.use((req, res, next) => {
    console.log("I run for all routes")
    // next tells the server to continue routing
    next()
  })
  
  //this is to get separate CSS working
  app.use(express.static(__dirname + '/public'));

  //without this middleware, req.body is undefined
  //with it, a body key is added and set to whatever was sent in the body
  app.use(express.urlencoded({extended: false}))

    
app.get('/', (req, res) => {
    res.send('Budgtr app working');
  });

  app.get('/budgets/new', (req, res) => {
    res.render('new.ejs')
  })

  app.post('/budgets', (req, res) => {
    let newTransaction = {}
    newTransaction.date = req.body.date
    newTransaction.name = req.body.name
    newTransaction.from = req.body.from
    newTransaction.amount = parseInt(req.body.amount)
    newTransaction.tags = req.body.tags
    budget.push(newTransaction)
  
    res.redirect('/budgets')
  })

  // index route
app.get('/budgets', (req, res) => {
    res.render('index.ejs', {transaction: budget});
  });

  // show route
app.get('/budgets/:id', (req, res) => {
    res.render('show.ejs', {transaction: budget[req.params.id]});
  });


app.listen(port, () => {
    console.log(`Budgtr app listening on port: ${port}`)
  });
  