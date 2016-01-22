var app = angular.module("mainApp", ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "../Includes/14Daylogin.html"
    })
    .when("/dashbord", {
        templateUrl: "../Includes/14Daydashbord.html"
    })
    .when("/erroe", {
        templateUrl: "error.html"
    })
    .otherwise({
        redirectTo: "/"
    });
});

app.controller("loginCtrl", function ($scope, $location) {
    $scope.submit = function () {
        if ($scope.txtUserName == "admin" && $scope.txtPassWord == "admin") {
            $location.path("/dashbord");
        }
        else
        {
            alert("Sorry..... Try again")
        }
    }
});