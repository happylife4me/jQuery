var app = angular.module("mainApp", []);

app.controller("app", function ($scope) {
    $scope.tasks = [];

    var taskDate = localStorage["taskList"];
    if (taskDate !== undefined) {
        $scope.tasks = JSON.parse(taskDate);
    }

    $scope.searchEnter = function () {
        if (event.which == 13 && $scope.txtTask != "") {
            $scope.addTask();
        }
    };

    $scope.addTask = function () {
        $scope.tasks.push({ "taskMsg": $scope.txtTask, "status": false });
        console.log($scope.tasks);
        $scope.txtTask = "";
        localStorage["taskList"] = JSON.stringify($scope.tasks);
        console.log(localStorage);
    };

    $scope.contentEdit = function (msg) {
        event.target.contentEditable = event.target.contentEditable == "false" ? "true" : "false";

    };

    $scope.enterAgain = function (msg) {
        if (event.which == 13 && msg != "")
        {
            $scope.contentEdit();
            console.log($scope.tasks);
            localStorage["taskList"] = JSON.stringify($scope.tasks);
        }
    };
});