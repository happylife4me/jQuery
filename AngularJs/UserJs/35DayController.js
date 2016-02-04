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

        for (i = 0; i < $scope.tasks.length; i++) {
            if ($scope.tasks[i].taskMsg == msg) {
                $scope.tasks[i].taskMsg = event.target.innerText;
            }
        }
        localStorage["taskList"] = JSON.stringify($scope.tasks);
        console.log($scope.tasks);
        event.target.contentEditable = event.target.contentEditable == "false" ? "true" : "false";

    };

    $scope.enterAgain = function (msg) {
        if (event.which == 13 && msg != "")
        {
            $scope.contentEdit(msg);
            console.log($scope.tasks);
        }
    };

    $scope.changeStatus = function (index) {
        console.log(index);
        $scope.tasks[index].status != $scope.tasks[index].status
        localStorage["taskList"] = JSON.stringify($scope.tasks);
    };
});