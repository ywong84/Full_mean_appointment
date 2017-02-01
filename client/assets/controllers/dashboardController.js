app.controller('dashboardController', ['$scope', '$location', 'dashboardFactory', 'usersFactory', function($scope, $location, dashboardFactory, usersFactory) {
  console.log("dashboard controller loaded");
  var index = function(){
    dashboardFactory.index(function(returnedData){
      console.log(returnedData, "need to post this data");
      $scope.appointments = returnedData;
      console.log(returnedData, "hello");
    })
  }
  index()
  var getCurrentUser = function(){
    usersFactory.getCurrentUser(function( returnedData){
      $scope.user = returnedData;
    })
  }
  getCurrentUser()

  $scope.delete = function(id) {
    dashboardFactory.delete(id, index)
  };
  $scope.tomorrow = new Date();
  $scope.tomorrow.setDate($scope.tomorrow.getDate() + 1);

  // $scope.search = function(item) {
  //   if($scope.searchText === undefined) {
  //     return true;
  //   }else{
  //     if(item.name.indexOf($scope.searchText) != -1 || item.complain.indexOf($scope.searchText) != -1){
  //       return true;
  //     }
  //   }
  //   return false
  // }
}]);
