// var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('Hello World!');
// }).listen(3000);
const port = 8080;  

var express = require('express');

var app = express();

app.get('/', function(req, res){
res.send('<h1>Hello<h1>')
})

app.get('/date', function(req, res){
  let date_ob = new Date()
  res.send('Today is <br><h2>' + date_ob+'</h2>')
  })


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
