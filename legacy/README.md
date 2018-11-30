# Design Project Server

This repository contains the server for establishing communication between the mobile application and the Jetson board, using node and Express.

## Prerequisites

In order to run the server, you will need to have npm and node installed on your local machine.

### Ubuntu

To install node, run:
```
sudo apt-get update
sudo apt-get install nodejs
```
You can check if this was successful by running:
```
nodejs -v
```
This will show the installed version of node.

It is also a good idea to install the npm package manager for node:
```
sudo apt-get install npm
sudo apt-get install build-essential
```

## Setup

Once you have installed these dependencies, simply clone the repo and run:
```
cd <APP DIRECTORY>
node index.js
```
The server will begin listening to requests on port 5000.
