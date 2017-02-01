var mongoose = require("mongoose")
var User = mongoose.model("User")
module.exports = {

  login: function(req, res){
    User.findOne({name: req.body.name}, function(err, users){
      if(err){
        res.json(err)
      }else{
        res.json(users)
      }
    })
  },
  create: function(req,res){
    var user = new User(req.body)
    user.save(function(err, users){
      if(err){
        res.json(err);
      }else{
        res.json(users);
      }
    })
  },
}
