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

app.get('/test', function (req, res) {
    processRunner.runProcess('ls', function() {
        res.send('Worked')
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