var app = angular.module("mainApp", []);

app.controller("app", function ($scope) {
    $scope.tasks = [];
    $scope.searchEnter = function () {
        //console.log(event.which || event.keyCode);
        if (event.which == 13 && $scope.txtTask != "")
        {
            $scope.addTask();
        }
    };
    $scope.addTask = function () {
        $scope.tasks.push({ "taskMsg": $scope.txtTask, "status": false });
        console.log($scope.tasks);
        $scope.txtTask = "";
    };
});