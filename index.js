//Load express module with `require` directive
var express = require('express')
var app = express()

//Define request response in root URL (/)
app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/helloAgain', function (req, res) {
  res.send('Im from the second port!')
})

app.get('/helloAgain/:name', function (req, res) {
  // console.log(req.params.name)
  res.send('HI '+ req.params.name);
})

//Launch listening server on port 8081
app.listen(8081, function () {
  console.log('app listening on port 8081!')
})