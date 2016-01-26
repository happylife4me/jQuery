var app = angular.module("mainApp", []);

app.provider("date", function () {
    var greet="";
    return {
        setGreeting: function (value) {
            greet = value;
        },
        $get: function () {
            return {
                showDate: function () {
                    var date = new Date();
                    return date.getHours();
                },
                showMsg: function () {
                    var date = new Date();
                    return greet + " " + date.getHours();
                }
            }
        }
    }
});


app.config(function (dateProvider) {
    var time = dateProvider.$get().showDate();
    if (time > 0 && time < 12) dateProvider.setGreeting("Good Morning!");
    else if (time >= 12 && time < 17) dateProvider.setGreeting("Good Day!");
    else if (time >= 17 && time < 21) dateProvider.setGreeting("Good Evening!");
    else
        dateProvider.setGreeting("Good Night!");
});

app.controller("app", function ($scope, date) {
    $scope.greetMessage = date.showMsg();

});