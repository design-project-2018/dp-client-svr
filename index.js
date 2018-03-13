var express = require('express');
var processRunner = require('./ChildProcessRunner')

var socket = require('socket.io');
// App setup

var app = express();
var server = app.listen(4000, function(){
    console.log('listening to requests on port 4000')
})

// Static files
app.use(express.static('public'));


app.get('/startRecording', function (req, res) {
    processRunner.runProcessStart(function(result) {
        res.send(result)
    })
})

app.get('/stopRecording', function (req, res) {
    processRunner.runProcessStop(function() {
        res.send('Successfully Stopped. . .')
    })
})

//Socket Setup

var io = socket(server);

io.on('connection', function(socket){
    console.log('made socket connection', socket.id)
});



// Child Process Setup

// const { spawn } = require('child_process');
// const child = spawn('pwd');