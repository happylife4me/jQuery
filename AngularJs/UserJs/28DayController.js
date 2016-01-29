var app = angular.module("mainApp", []);

app.controller("app", function ($scope) {
    $scope.show = "msg1";

    $scope.toggel = function () {
        $scope.show = $scope.show == "msg1" ? "msg2" : "msg1";
    };
});