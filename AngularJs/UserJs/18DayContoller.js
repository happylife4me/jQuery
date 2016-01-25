var app = angular.module("mainApp", []);
    
app.controller("people", function ($scope, $http) {
    $http.get("/Includes/18DayData.json")
    .success(function (response) {
        $scope.persons = response.records;
    });
});