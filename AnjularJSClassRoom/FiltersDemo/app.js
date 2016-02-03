angular.module("myapp", [])
    .controller("FriendsController", function ($scope) {
        $scope.products = [
        { name: "pendrive", phone: 9885166906, country: "US" },
        { name: "Mouse", phone: 9885166906, country: "US" },
        { name: "Monitor", phone: 9885166906, country: "IN" },
        { name: "KeyBord", phone: 9885166906, country: "NZ" },
        { name: "CPU", phone: 9885166906, country: "SL" },
        { name: "Speckers", phone: 9885166906, country: "NP"},
        { name: "Mic", phone: 9885166906, country: "AU" },
        { name: "Touchpad", phone: 9885166906, country: "IN" }
        ]
    });