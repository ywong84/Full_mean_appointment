
var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
  name: {type: String},
  _appointments: [{type:mongoose.Schema.Types.ObjectId, ref: "Appointment"}],
},{timestamps: true});

var AppointmentSchema = new mongoose.Schema({
  date: {type: Date, required:true},
  time: {type: Date, required:true},
  complain: {type: String, required:true, minlength: 10},
  _user: {type:mongoose.Schema.Types.ObjectId, ref: "User"},
},{timestamps: true});

var Appointment = mongoose.model('Appointment', AppointmentSchema);
var User = mongoose.model('User', UserSchema);
