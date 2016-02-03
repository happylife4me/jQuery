var app = angular.module("myApp", []);

app.factory("WeatherService", function ($http) {
    return {
        getWeatherAsync: function(city, country)
        {
            var query = city + ',' + country;
            var url = "http://api.openweathermap.org/data/2.5/weather";
            return $http.get(url, {
                params: { q: query, appid: "d4f33602d54573ad55af7d47fc55aa9a"}
            }).then(function (response) {
                console.log(response.data);
                return response.data.weather[0].description;
            });
        }
    }
});