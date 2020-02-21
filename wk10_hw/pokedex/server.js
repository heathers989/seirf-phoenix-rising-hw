// Load express:
const express = require('express');
const app = express();
const pokemon = require('./models/pokemon.js')
const methodOverride = require("method-override");

// Set the web server port:
const port = 3000;

// Load methodOverride middleware so you can make delete, put, and 
// patch requests from web pages:
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

// INDEX:
app.get("/pokedex", (req, res) => {
    res.render("index.ejs", { data: pokemon });
  });

// SHOW
app.get('/pokedex/:id', (req, res) => {
    res.render("show.ejs", {data: pokemon[req.params.id]})
})


app.listen(port, () => {
    console.log(`Pokedex app listening on port ${port}`)
})
