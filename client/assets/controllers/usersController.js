app.controller('usersController', ['$scope', '$location', 'usersFactory', function($scope, $location, usersFactory) {
  console.log("new Users loaded");

  $scope.login = function(){
      usersFactory.login($scope.user, function(data){
        if(data === null){
          usersFactory.create($scope.user, function(data){
            if(data.errors){
              $scope.errors = data.errors
            }else{
              $location.url('/')
            }
          })
        }else{
          $location.url('/dashboard')
        }
      })
    }

}]);
