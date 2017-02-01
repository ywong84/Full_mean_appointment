app.factory("usersFactory",["$http", function($http){
  var factory = {};
  var currentUser = {}
  factory.login = function(user, callback){
    currentUser = {}
    $http.post('/login', user).then(function(data){
      currentUser = data.data
      callback(currentUser)
    });
  }
  // create new user
  factory.create = function(newuser, callback){
    $http.post('/users', newuser).then(function(returned_data){
      if(!returned_data.data){
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
      }else{
        currentUser = returned_data.data
        callback(returned_data.data)
      }
    });
  };
  factory.getCurrentUser = function(callback){
    callback(currentUser);
  }
  return factory
}])
