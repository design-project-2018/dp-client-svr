from flask import Flask, render_template, request, url_for, jsonify, send_file
from ipc.server import startServer
from subprocess import Popen, PIPE
import threading

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/start-socket', methods=['GET']) 
def startSocket():
    # start websocket
    websocket_thread = threading.Thread(target=startServer)
    websocket_thread.start()
    return jsonify('Streaming')

@app.route('/start-stream', methods=['GET']) 
def startStream():
    # start client
    client = Popen(["./ipc/dp-preprocessor/client"], stdout=PIPE)

    # start stream
    stream = Popen(['./ipc/dp-preprocessor/preprocessor', '/home/nvidia/Downloads/videos/training/positive/000001.mp4'], stdout=PIPE)
    return jsonify('Streaming')

if __name__ == '__main__':
    app.run()

