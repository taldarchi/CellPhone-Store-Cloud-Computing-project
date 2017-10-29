
"use strict"

var devicesController  = require('../controllers/devicesController');
var redisService = require('../services/redisService');
var NodeCache = require( "node-cache" );
var myCache = new NodeCache();

class routes {

  constructor(app){
    this.app = app;
    this.app.get('/devices', this.getDevices);
    this.app.post('/devices', this.setDevices);
    this.app.get('/basket', this.getBasket);
    this.app.post('/basket', this.setBasket);
  }

  getDevices(req, res) {
    var cachedDevices = myCache.get( "devices" );
    if ( cachedDevices == undefined ){
      var controller  =  new devicesController();
      controller.getDevices()
      .then(function (groups) {
        myCache.set( "devices",groups, 60 );
        res.json(groups)
      })
      .catch(function (err) {
        // process via slack or 3rd party..
      })
    }else{
      res.json(cachedDevices)
    }
  }

  setDevices(req, res) {
    var controller  =  new devicesController();
    controller.setDevices(req.body.data)
    .then(function () {
      res.json('OK')
    })
    .catch(function (err) {
      // process via slack or 3rd party..
    })
  }
  setBasket(req, res){
    var devices = JSON.stringify(req.body.data.devices);
    var redis  =  new redisService();
    redis.set('baskets','basket',devices)
    .then(function(status){
      if (status === 'OK'){
        res.json(status);
      }else{
        res.json('ERROR');
      }
    })
  }
  getBasket(req, res){
    var redis  =  new redisService();
    redis.get('baskets')
    .then(function(baskets){
      if (baskets){
        res.json(baskets);
      }else{
        res.json('ERROR');
      }
    })
  }
}


module.exports = routes;
