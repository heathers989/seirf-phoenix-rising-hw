const express = require('express')
const app = express()
const PORT = 3003
const cors = require('cors')
const animalsController = require('./controllers/animals.js')
const mongoose = require('mongoose')
// const session = require('express-session')

// Configuration
// const PORT = process.env.PORT
const MONGODB_URI = process.env.MONGODB_URI ||'mongodb://localhost:27017/animals'; 

mongoose.connect('mongodb://localhost:27017/animals', { 
  useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.on('error', err => console.log(err.message + ' is Mongod not running?'))
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'))

// mongoose.connect(MONGODB_URI, 'mongodb://localhost:27017/animals', { useNewUrlParser: true, useUnifiedTopology: true })

mongoose.connection.once('open', ()=>{
    console.log('connected to mongoose...')
})

app.use(express.json());  //use .json(), not .urlencoded()

// //load cors middleware:
// const whitelist = ['http://localhost:3000', 'https://fathomless-sierra-68956.herokuapp.com']
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }

// //for production and a secure environment do this:
// app.use(cors(corsOptions)) // Note: all routes are now exposed. If you want to limit access for specific verbs like POST or DELETE you can look at the npm documentaion for cors (for example with OMDB - it's ok for anyone to see the movies, but you don't want just anyone adding a movie)

// to allow everyone do this:

app.use(cors())


// app.use(session({
//   secret: process.env.SECRET,
//   resave: false,
//   saveUninitialized: false
// }))

app.use('/animals', animalsController)

mongoose.connect(MONGODB_URI , { useNewUrlParser: true})

app.listen(PORT, () => {
  console.log('🎉🎊', 'celebrations happening on port', PORT, '🎉🎊',)
})