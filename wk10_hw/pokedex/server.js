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

//NEW
app.get('/pokedex/new', (req, res) => {
    res.render('new.ejs')
    
})

//POST
app.post('/pokedex', (req, res) => {
    let newPokemon = {}
    newPokemon.id = req.body.id
    newPokemon.name = req.body.name
    newPokemon.img = req.body.img
    newPokemon.type = [req.body.type]
    newPokemon.misc = {classification: req.body.classification}
    pokemon.push(newPokemon)
    console.log(newPokemon)
    // const newPokemon = pokemon.push(req.body)
    // console.log(newPokemon)

    res.redirect('/pokedex')
})

// SHOW
app.get('/pokedex/:id', (req, res) => {
    res.render("show.ejs", {data: pokemon[req.params.id]})
})

// INDEX:
app.get("/pokedex", (req, res) => {
    res.render("index.ejs", { data: pokemon });
    console.log(pokemon[0].misc.classification)
  });


app.listen(port, () => {
    console.log(`Pokedex app listening on port ${port}`)
})
