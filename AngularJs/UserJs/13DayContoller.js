var app = angular.module("mainApp", ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: '../Includes/13DayWelcomePage.html',
        template: 'Welcome user!'
    })
    .when("/helloUser", {
        templateUrl: '../Includes/13DayHelloPage.html'
    })
    .when("/byeUser", {
        templateUrl: '../Includes/13DayByePage.html'
    })
    .otherwise({
        redirectTo:"/"
    });

});