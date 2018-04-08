const START_COMMAND = 'dir'
const STOP_COMMAND = 'pwd'
var child_process = require('child_process')
var exec = child_process.exec

module.exports = {

    runProcessStart: function (callback) {
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
