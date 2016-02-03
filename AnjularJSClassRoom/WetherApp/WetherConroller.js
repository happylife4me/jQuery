angular.module("myApp")
    .controller("WeatherController", function ($scope, WeatherService) {
        $scope.getWeather = function () {
            $scope.weatherDesc = "Feathing ....";
            WeatherService.getWeatherAsync($scope.city, $scope.country)
                .then(function (data) {
                    $scope.weatherDesc = data;
                }, function () {
                    $scope.weatherDesc = "Error....";
                });
        }
    });