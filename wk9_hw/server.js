var express = require('express');
var app = express();
var port = 3001;


app.get('/greeting/:name', (req, res)=>{
    let name = req.params.name
    res.send('Hello there ' + name +'!')
});

app.get('/tip/:total/:tipPercentage', (req, res)=>{
    let total = parseInt(req.params.total)
    let tipPercentage = parseInt(req.params.tipPercentage)
    let tipAmt = (total * tipPercentage) / 100
    res.send('Tip amount is ' + tipAmt)
});


app.listen(port, () => {
	console.log('app is running on port: ', port);
});