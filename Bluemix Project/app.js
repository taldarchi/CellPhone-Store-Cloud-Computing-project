"use strict"
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes/index');

let app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

let API = new routes(app);




//app.get('/', routes.index);
//app.get('/devices', routes.getDevices);
var port = (process.env.VCAP_APP_PORT || 3000);
app.listen(port, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);


  // on startup

});
