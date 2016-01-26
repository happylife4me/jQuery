var application = angular.module("mainApp", []);

application.service('random', function () {
    
    var num = Math.floor(Math.random() * 10);
     this.generate = function () {
        return num;
    };
});

application.controller("appServices", function ($scope, random) {
    $scope.generateRandom = function () {
        $scope.randomNumber = random.generate();
    };

});