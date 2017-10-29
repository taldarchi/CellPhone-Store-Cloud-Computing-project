
"use strict"
var devicesDataHandler = require('../handlers/devicesDataHandler.js');

class deviceController {
    constructor(){

    }
    getDevices(){
        var handler = new devicesDataHandler();
        return handler.getDevices();
    }
    setDevices(data){
        return new Promise((resolve, reject) => {
           resolve();
        });
    }
}

module.exports = deviceController;