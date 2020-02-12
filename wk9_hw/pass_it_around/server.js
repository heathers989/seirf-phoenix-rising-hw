var express = require('express');
var app = express();
var port = 3002;


app.get('/', (req, res)=>{
    res.send(`
    <html>
    <body>
    <h1>99 bottles of beer on the wall</h1>
    <a href="/98">take one down pass it around</a>
    </body>
    </html>`)
});

app.get('/:number_of_bottles', (req, res)=>{
    let bottleNum = parseInt(req.params.number_of_bottles)
    let takeOneDown = parseInt(bottleNum - 1)
    if (bottleNum > 0) {
        res.send(`
        <html>
        <body>
        <h1>${bottleNum} bottles of beer on the wall</h1>
        <a href="/${takeOneDown}">take one down pass it around</a>
        </body>
        </html>`)

    } else if (bottleNum == 0) {
        res.send(`<html>
                  <body>
                  <h1>${bottleNum} bottles of beer on the wall</h1>
                  <a href="/">Start Over</a>
                </body></html>`)
    }
    
});


app.listen(port, () => {
	console.log('app is running on port: ', port);
});