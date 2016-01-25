var app = angular.module("mainApp", []);
    
app.controller("people", function ($scope, $http) {
    $http.get("/Includes/16DayData.json")
    .success(function (response) {
        $scope.persons = response.records;
    });
});