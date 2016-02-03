var myApp = angular.module("myApp", []);

myApp.config(function ($provide) {
    $provide.decorator("$log", function ($delegate) {
        $delegate.PostErrorToServer = function (msg) {
            $delegate.log("Data to Post: " + msg);
            $delegate.log("Inserted in server data base");
        }
        return $delegate;
    });
});


myApp.controller("TestController", function ($scope, $log) {
    $scope.data = "sample data";
    $log.PostErrorToServer("Add some to scope");
});