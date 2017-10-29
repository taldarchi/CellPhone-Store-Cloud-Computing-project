

"use strict"
var Cloudant = require('cloudant');

class cloudantService {

    constructor(){
        console.log('start cloudantService');
        var url = 'https://e9ec0fa1-4568-43b5-b406-20aa264984a8-bluemix:4166caa672323802fd641373059716fddf01e900bbfdf79d89421264b069e313@e9ec0fa1-4568-43b5-b406-20aa264984a8-bluemix.cloudant.com';
        if (process.env.VCAP_SERVICES){
            this.cloudant = Cloudant({vcapServices: JSON.parse(process.env.VCAP_SERVICES)},this.init);
        }else{
            this.cloudant = Cloudant(url);
        }
    }
    getDB(){
        return this.cloudant;
    }


}

module.exports = cloudantService;