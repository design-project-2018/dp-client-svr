var express = require('express');
var processRunner = require('./ChildProcessRunner')
var app = express()

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', req.headers.origin)
  res.header('Access-Control-Allow-Credentials', true)
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,UPDATE')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.get('/test', function (req, res) {
    console.log('Test Passed!')
    res.send('Test Passed!')
})


app.get('/start-recording', function (req, res) {
    processRunner.runProcessStart(function(result) {
        res.send(result)
    })
})

app.get('/stop-recording', function (req, res) {
    processRunner.runProcessStop(function() {
        res.send('Successfully Stopped. . .')
    })
})

var server = app.listen(5000, function(){
    console.log('Listening to requests on port 5000')
})

