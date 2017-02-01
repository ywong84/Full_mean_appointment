var app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl: "partials/main.html",
    controller: "usersController"
  })
  .when("/dashboard", {
    templateUrl: "partials/dashboard.html",
    controller: "dashboardController"
  })
  .when("/new_appointment", {
    templateUrl: "partials/new.html",
    controller: "newController"
  })
  .otherwise({
    redirectTo: "/"
  })
});
