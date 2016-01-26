var app = angular.module("mainApp", []);
    
app.controller("app", function ($scope) {
    var range = 10;
    var myRange = [];
    for (i = 0; i <range;i++)
    {
        myRange.push(i)
    }
    $scope.myRange = myRange;
});

app.controller("rangeApp", function ($scope) {
    var myRange = new Array(100);
    $scope.myRange = myRange;
});