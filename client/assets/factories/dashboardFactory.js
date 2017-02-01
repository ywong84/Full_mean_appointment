app.factory("dashboardFactory",["$http", function($http){
  var factory= {};
  var appointments = [];
  var appointment = {};

  factory.create = function(newAppointment, user, callback){
    console.log(newAppointment, "my appointments");
    $http.post("/create/" + user, newAppointment).then(function(returned_data){
      if(typeof(callback) == 'function'){
        callback(returned_data.data)
        console.log(returned_data.data, "returning data");
      }
    });
  };
  factory.index = function(callback){
    $http.get("/dashboard/").then(function(returned_data){

      appointments = returned_data.data;


      callback(appointments)
    });
  };
  factory.delete = function(id,callback){
    $http.delete('/appointment/' + id).then(function(res){
      appointments = res.data;
      callback()
    });

  };
  return factory
}])
