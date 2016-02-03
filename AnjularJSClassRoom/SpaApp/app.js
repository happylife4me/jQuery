var app = angular.module("myApp", ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/persons", {
                templateUrl: "partials/person_list.html",
                controller: "IndexController"
            })
             .when("/persons/:id", {
                 templateUrl: "partials/person_details.html",
                 controller: "ShowController"
             })
            .when("/persons/:id/:age", {
                templateUrl: "<h1>Multiple parameters in touting<h1>",
                controller: "MultiController"
            })
            .otherwise({
                templateUrl: "partials/login.html",
                controller: "LoginController"
            });
    })
    .run(function ($rootScope) {
        $rootScope.$on("$routeChangeStart", function (event, next, current) {
            console.log("Route Setting done");
        });
    });

app.run(function ($rootScope) {
    $rootScope.$on("$routeChangeStart", function (event, current, previous) {
        $rootScope.loading = true;
    });
});

app.run(function ($rootScope) {
    $rootScope.$on("$routeChangeSuccess", function (event, current, previous) {
        $rootScope.loading = false;
    });
});

app.run(function ($rootScope) {
    $rootScope.$on("$routeChangeError", function (event, current, previous) {
        $window.location.href = "error.html";
    });
});

//Service code

app.service("$SessionService", function ($http, $log) {
    $log.info("In the Session Service");

    this.isAuthenticated = function (user) {
        return true;
    }
});

//factory code
app.factory("PersonFactory", function ($SessionService) {
    var persons = [
        { name: "Jagadeesh", age: 30, id: 1 },
        { name: "Jaggu", age: 31, id: 2 },
        { name: "Ddeesh", age: 33, id: 3 },
        { name: "Kumar", age: 19, id: 4},
        { name: "Kumar1", age: 30, id: 5 },
        { name: "Jaggu Bai", age: 25, id: 6 },
        { name: "Baabu", age: 22, id: 7 },
        { name: "Bala", age: 29, id: 8 }
    ];

    return {
        all: function (user) {
            
            if ($SessionService.isAuthenticated(user)) {
                return persons;
            }
            else
                return null;
        },
        get: function (id) {
            var res = null;
            angular.forEach(persons, function (p) {
                if (p.id == id)
                    res = p;
            });
            return res;
        }
    }
});

app.controller("IndexController", function ($scope, PersonFactory, $location) {
    var p = PersonFactory.all();
    if (p != null)
        $scope.persons = p;
    else
        $scope.$broadcast("Session_Expried");
    if (window.localStorage != "undefined")
        window.localStorage.persons = JSON.stringify($scope.persons);
    else
        console.log("Sorry this does not support local storage");
});

app.controller("ShowController", function ($scope, $routeParams, PersonFactory, $location) {
    $scope.person = PersonFactory.get($routeParams.id);
});

app.controller("MultiController", function ($scope, $routeParams) {
    alert($routeParams.id + " - " + $routeParams.age);
});

app.controller("LoginController", function ($scope, $rootScope, $location) {

    $scope.user = {
        usernmae: "jagadeesh",
        password: ""
    };

    $rootScope.isAuthenticated = false;

    $scope.Checkuser = function (user) {

        var userName = user.usernmae;
        var pwd = user.password;

        if (userName == "jagadeesh" && pwd == "hi") {
            $location.path('/persons')
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

