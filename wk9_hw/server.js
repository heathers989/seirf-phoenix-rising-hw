var express = require('express');
var app = express();
var port = 3001;

//greetings
app.get('/greeting/:name', (req, res)=>{
    let name = req.params.name
    res.send('Hello there ' + name +'!')
});

//tip calculator
app.get('/tip/:total/:tipPercentage', (req, res)=>{
    let total = parseInt(req.params.total)
    let tipPercentage = parseInt(req.params.tipPercentage)
    let tipAmt = (total * tipPercentage) / 100
    res.send('Tip amount is ' + tipAmt)
});

//magic 8 ball

const responseArr = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

app.get('/magic/:phrase', (req, res)=>{
    let phrase = req.params.phrase;
    let randomResponse = responseArr[Math.floor(Math.random() * responseArr.length)]
    res.send('Question is: ' + phrase + '? Response is: ' + randomResponse)
});

app.listen(port, () => {
	console.log('app is running on port: ', port);
});