var path = require('path');
var users = require('./../controllers/users.js');
var appointments = require('./../controllers/appointments.js');

module.exports = function(app){
  app.post('/users', function(req,res){
    users.create(req, res);
  });
  app.post("/login", function(req,res){
    users.login(req, res);
  });

  app.get('/dashboard', function(req, res){
    appointments.index(req, res);
  })

  app.post('/create/:id', function(req, res){

    appointments.create(req,res);
  })
  app.delete('/appointment/:id', function(req, res){

    appointments.destroy(req,res);
  })
}
