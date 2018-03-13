const START_COMMAND = 'dir'
const STOP_COMMAND = 'pwd'
var child_process = require('child_process')
// var child_stop = child_process.spawn(STOP_COMMAND)

module.exports = {

    runProcessStart: function (callback) {
        const exec = child_process.exec;
        exec(START_COMMAND, function(err, stdout) {
            console.log(stdout)
            return callback(stdout)
        })
    },

    runProcessStop: function (callback) {


        console.log(STOP_COMMAND)
        return callback()
    }
}