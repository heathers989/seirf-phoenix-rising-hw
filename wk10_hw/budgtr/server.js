const express = require('express');
const app = express();
const port = 3000;

const budget = require('./models/budget.js');

app.use((req, res, next) => {
    console.log("I run for all routes")
    // next tells the server to continue routing
    next()
  })
  
  app.use(express.static(__dirname + '/public'));

  //without this middleware, req.body is undefined
  //with it, a body key is added and set to whatever was sent in the body
  app.use(express.urlencoded({extended: false}))

    
app.get('/', (req, res) => {
    res.send('Budgtr app working');
  });

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
  