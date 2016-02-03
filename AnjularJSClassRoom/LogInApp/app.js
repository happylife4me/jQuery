var app = angular.module("loginApp", []);

app.controller("LoginController", function ($scope, $rootScope) {

    $scope.user = {
        usernmae: "jagadeesh",
        password: ""
    };

    $rootScope.isAuthenticated = false;

    $scope.Checkuser = function (user) {

        var userName = user.usernmae;
        var pwd = user.password;

        if (userName == "jagadeesh" && pwd == "hi") {
            $scope.message = userName + " is successfully logged in ... Welcome";
            $rootScope.isAuthenticated = true;
            console.log(userName + " is authenticated successfully");
        }
        else {
            $scope.message = userName + " Sorry Please check your username and password and try again";
            $rootScope.isAuthenticated = false;
            console.log(userName + " is authenticated Failed");
        }

        $rootScope.$watch("isAuthenticated", function (newval) {
            console.log(newval + " Updated");
        });
    }
        
});