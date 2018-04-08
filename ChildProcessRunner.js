const file = '/home/nvidia/Desktop/dp-jetson-alg/dp_jetson_alg'
const args = ['/home/nvidia/Desktop/dp-jetson-alg/footage.mp4']
const STOP_COMMAND = 'pwd'
var runner = require('child_process')
var process

module.exports = {

    runProcessStart: function (callback) {
        process = runner.spawn(file, args)
        console.log('Process started!')
        return callback('Process started!')
    },

    runProcessStop: function (callback) {
        process.kill()
	console.log('Process killed!')
        return callback('Process ended!')
    }

}
