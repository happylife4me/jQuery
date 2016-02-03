var myapp = angular.module("myApp", []);

myapp.controller("MainController", ['$scope', '$q', '$interval', function ($scope, $q, $interval) {

    $scope.getPromiseAsync = function () {
        var i = 0;
        var deferred = $q.defer();
        var timer = $interval(function () {
            if ($scope.cancelRequested) {
                deferred.reject("Promose rejested due to Cancellation");
                $interval.cancel(timer);
            }
            i++;
            if (i==100)
            {
                deferred.resolve("counter have reached max");
                $interval.cancel(timer);
            }
            else
            {
                deferred.notify("Conter has reached " + i);
            }
        }, 1000);
        return deferred.promise;
    }

    $scope.getaAsyncMessage = function () {
        var promise = $scope.getPromiseAsync();

        promise.then(function (msg) {
            $scope.status = "Resolved : " + msg;
        }, function (msg) {
            $scope.status = "Rejected : " + msg;
        }, function (msg) {
            $scope.status = "Notify : " + msg;
        });
    }

}]);