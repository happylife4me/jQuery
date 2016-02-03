var app = angular.module("myApp", []);

app.value("Metadata", {
    project: "Learning Angular Js",
    version: "1.0",
    aunthor: "Jagadeesh"
});

app.service("LogService", function () {
    this.LogInfo = function (msg) {
        console.log(msg);
    }
});

app.controller("TestController", function ($scope, $rootScope, LogService, Metadata) {
    $rootScope.company = "Verizon Data Service India Pvt";

    $scope.Fname = "Jagadeesh";
    $scope.email = "Mr.Jagadeesh@Gmail.com";
    $scope.LName = "Sivapuram";
    $scope.project = Metadata.project;
    LogService.LogInfo($scope.LName + " " + $scope.Fname + "Info Created" + Metadata.aunthor);

});


