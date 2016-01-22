var app = angular.module("mainApp", ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "../Includes/14Daylogin.html"
    })
    .when("/dashbord", {
        resolve:{
            "check": function ($location, $rootScope) {
                if (!$rootScope.isLogIn)
                    $location.path("/");
            }
        },
        templateUrl: "../Includes/14Daydashbord.html"
    })
    .when("/erroe", {
        templateUrl: "error.html"
    })
    .otherwise({
        redirectTo: "/"
    });
});

app.controller("loginCtrl", function ($scope, $location, $rootScope) {
    $scope.submit = function () {
        if ($scope.txtUserName == "admin" && $scope.txtPassWord == "admin") {
            $rootScope.isLogIn = true;
            $location.path("/dashbord");
        }
        else
        {
            $rootScope.isLogIn = false;
            alert("Sorry..... Try again")
        }
    }
});