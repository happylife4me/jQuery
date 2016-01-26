var application = angular.module("mainApp", []);

application.factory('random', function () {
    var randomObj = {};
    var num = Math.floor(Math.random() * 10);
    randomObj.generate = function () {
        return num;
     };
     return randomObj;
});

application.controller("appServices", function ($scope, random) {
    $scope.generateRandom = function () {
        $scope.randomNumber = random.generate();
    };
});