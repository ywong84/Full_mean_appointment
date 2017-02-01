app.controller('newController', ['$scope', '$routeParams', '$location', 'dashboardFactory', 'usersFactory', function($scope, $routeParams, $location, dashboardFactory, usersFactory) {
  var getCurrentUser = function(){
    usersFactory.getCurrentUser(function( returnedData){
      $scope.user = returnedData;
    })
  }
  getCurrentUser()

  $scope.create = function(){
console.log($scope.user._id, "my user");
    dashboardFactory.create($scope.appointment, $scope.user._id,  function(data){
      console.log($scope.appointment, "my appointment info");
      if(data.errors){
        $scope.errors = data.errors
      }else {
        $location.url("/dashboard")
      }
    })
  }
}]);
