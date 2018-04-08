var express = require('express');
var processRunner = require('./ChildProcessRunner')
var app = express()

app.get('/test', function (req, res) {
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

