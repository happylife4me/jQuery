var app = angular.module("mainApp", []);

app.controller("appWatch", function ($scope) {
    $scope.counter = 0;
    $scope.$watch("muText", function (newVal, oldVal) {
        console.log("New Value : " + newVal);
        console.log("Old Value : " + oldVal);
        $scope.counter++;
    });

});