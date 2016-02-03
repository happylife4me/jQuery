var app = angular.module("customDriectiveApp", []);

app.controller("CustomController", function ($scope) {
    $scope.message = "I'm From Controller";
});

app.directive('customDirective', function () {

    return {

        restrict: 'C', // default AEC
        scope: true,
        replace: true,
        template: "<div class='well'>{{message}}</div>",
        //templateUrl:"mytmpl.html",

        link: function (scope, element, attrs) {

            alert(scope.message);
            scope.message = "I'm from customDirective";
            element.bind('click', function () {
                element.css('font-size', '30px');
                element.css('background-color', 'green');
            });
        }
    }
});