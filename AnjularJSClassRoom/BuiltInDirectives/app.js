var app = angular.module('myShop', []);

app.controller("DirectiveController", ['$scope', '$rootScope', function ($scope, $rootScope) {

    $scope.myColor = "blue";
    $scope.appTitle = "Understanding Built-in Directives";
    $rootScope.discount = "Our Discount on Diwali is 22%"

    //Pojo Collection - Json Collection - Modal

    $scope.products = [
        { name: "pendrive", Qnty: 1,price: 650 },
        { name: "Mouse", Qnty: 1, price: 300 },
        { name: "Monitor", Qnty: 1, price: 2800 },
        { name: "KeyBord", Qnty: 1, price: 800 },
        { name: "CPU", Qnty: 1, price: 14500 },
        { name: "Speckers", Qnty: 1, price: 1300 },
        { name: "Mic", Qnty: 1, price: 150 },
        { name: "Touchpad", Qnty: 1, price: 3000 },
    ]

    $scope.discount = function(){
        alert($rootScope.discount);
    }

    $scope.removeItem = function (index) {
        $scope.products.splice(index, 1);
    }

    $scope.addprod = function () {
        $scope.products.push({ name: $scope.PName, price: $scope.pPrice, Qnty :$scope.pQunty });
    }

    $scope.GetTotal = function()
    {
        var Tproducts = $scope.products;
        var sum = 0;
        for (var i =0; i < Tproducts.length; i++ )
        {
            sum += Tproducts[i].Qnty * Tproducts[i].price;
        }
        return sum;
    }

}]);


//var app = angular.module("myShop", []); app.controller("DirectiveController", ["$scope", "$rootScope", function (e, i) { e.myColor = "blue", e.appTitle = "Understanding Built-in Directives", i.discount = "Our Discount on Diwali is 22%", e.products = [{ name: "pendrive", price: 650 }, { name: "Mouse", price: 300 }, { name: "Monitor", price: 2800 }, { name: "KeyBord", price: 800 }, { name: "CPU", price: 14500 }, { name: "Speckers", price: 1300 }, { name: "Mic", price: 150 }, { name: "Touchpad", price: 3e3 }], e.discount = function () { alert(i.discount) }, e.removeItem = function (i) { e.products.splice(i, 1) } }]);


