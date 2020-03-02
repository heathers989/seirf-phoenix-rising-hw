// Load express:
const express = require('express');
const app = express();
const pokemon = require('./models/pokemon.js')
const methodOverride = require("method-override");

// Set the web server port:
const port = 3001;

// Load methodOverride middleware so you can make delete, put, and 
// patch requests from web pages:
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

//This lets the app use separate css files
app.use(express.static('public'))

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
    newPokemon.stats = {hp: req.body.hp, attack: req.body.attack, defense: req.body.defense}
    pokemon.push(newPokemon)
    console.log(newPokemon)
    // const newPokemon = pokemon.push(req.body)
    console.log(newPokemon)

    res.redirect('/pokedex')
})

//EDIT
app.get("/pokedex/:id/edit", (req, res) => {
    res.render('edit.ejs', {
        data: pokemon[req.params.id],
        index: req.params.id
    })
})

//UPDATE
app.put('/pokedex/:id', (req, res) =>{
    pokemon[req.params.id].name = req.body.name;
    res.redirect('/pokedex')
})

// SHOW
app.get('/pokedex/:id', (req, res) => {
    res.render("show.ejs", {data: pokemon[req.params.id]})
})

//DELETE
app.delete("/pokedex/:id", (req, res) => {
    pokemon.splice(req.params.id, 1)
    res.redirect('/pokedex')
})

// INDEX:
app.get("/pokedex", (req, res) => {
    res.render("index.ejs", { data: pokemon });
    
  });


app.listen(port, () => {
    console.log(`Pokedex app listening on port ${port}`)
})
