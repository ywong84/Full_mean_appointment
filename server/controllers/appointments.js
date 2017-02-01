var mongoose = require("mongoose")
var User = mongoose.model("User");
var Appointment = mongoose.model("Appointment");
module.exports = {

  create: function(req,res){
    User.findOne({_id: req.params.id}, function(err, user){
      var appointment = new Appointment(req.body)
      appointment._user = req.params.id;

      user._appointments.push(appointment);
      appointment.save(function(err){
        if(err){
          res.json(err);
        }else{

          user.save(function(err){
            if (err){
              res.json(err)
            }else{
              res.json(user)
            }
          })
        }
      })
    })
  },
  // index: function(req,res){
  //   // console.log("\n\n\n!!!!!!!!!!!!!!!!!!!!!!")
  //   // console.log("id:", req.params.id)
  //   bucket.findOne({_id: req.params.id}).populate("_user").exec(function(err,survey){
  //     if(err){
  //       console.log(err, "survey error");
  //       res.json(err)
  //     } else {
  //       res.json(survey)
  //     }
  //   })
  // },
  index: function(req, res){
    Appointment.find({}).populate("_user").exec(function(err, appointment){
      if (err){
        res.json(err)
      }else {
        res.json(appointment)
      }
    })
  },
  destroy: function(req,res){
    Appointment.remove({_id: req.params.id}, function(err){
      if(err){
        console.log(err);
      } else {
        res.json({message: "Appointment deleted!"});
      }
    })
  },
}
