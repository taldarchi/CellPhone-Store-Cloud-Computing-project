

"use strict"
var redis = require("redis");
var cfenv = require('cfenv');



class redisService {

    constructor(){
        console.log('start redisService');
        let appenv = cfenv.getAppEnv();
        let services = appenv.services;
        let credentials = undefined;
        let redis_services = services["compose-for-redis"];
        if (redis_services) credentials = redis_services[0].credentials;
        if (credentials){
            this.client = redis.createClient(credentials.uri);
        }else{
            this.client = redis.createClient('redis://admin:SDNRQQQLFSYQUVCG@sl-us-dal-9-portal.5.dblayer.com:21481');
        }
    }

    getDB(){
        return this.client;
    }

    set(document, key, value) {
        return new Promise((resolve, reject) => {
            this.client.hset(document, key, value, function(error, result) {
                if (error) {
                    reject(error);
                } else {
                    resolve('OK');
                }
            });
        });
    }

    get(document){
        return new Promise((resolve, reject) => {
            this.client.hgetall(document, function (err, resp) {
                if (err) {
                    reject(err);
                } else {
                    resolve(resp.basket);
                }
            });
        });
    }

}

module.exports = redisService;