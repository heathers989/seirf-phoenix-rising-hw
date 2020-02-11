var express = require('express');
var app = express();
var port = 3001;


app.get('/greeting/:name', (req, res)=>{
    let name = req.params.name
    res.send('Hello there ' + name +'!')
});

app.listen(port, () => {
	console.log('app is running on port: ', port);
});