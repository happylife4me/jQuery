var app = angular.module("mainApp", []);

app.controller("app", function ($scope) {
    $scope.task = [];
    $scope.searchEnter = function () {
        //console.log(event.which || event.keyCode);
        if (event.which == 13 && $scope.txtTask != "")
        {
            $scope.addTask();
        }
    };
    $scope.addTask = function () {
        $scope.task.push($scope.txtTask);
        console.log($scope.task);
        $scope.txtTask = "";
    };
});