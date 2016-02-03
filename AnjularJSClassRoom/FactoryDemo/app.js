var app = angular.module("myApp", []);

app.service("$RsLogService", function () {
    this.log = function(obj)
    {
        console.log("In service : " + obj);
    }
});


app.factory("$userFactory", function ($RsLogService) {
    var users = ["Sri", "Hanuman", "Sita", "Rama"];

    return {
        all: function () {
            $RsLogService.log("Returns All user Info");
            return users;
        },
        first: function () {
            return users[0];
        }
    };
});

app.controller("FirstController", function ($scope, $userFactory) {
    $scope.users = $userFactory.all();
});

app.controller("SecondController", function ($scope, $userFactory) {
    $scope.firstuser = $userFactory.first();
});

