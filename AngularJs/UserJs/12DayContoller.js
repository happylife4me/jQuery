﻿var app = angular.module("mainApp", ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        template: 'Welcome user!'
    })
    .when("/anotherPage", {
        template: "Welcome User, Again!"
    })
    .otherwise({
        redirectTo: "/"
    });

});