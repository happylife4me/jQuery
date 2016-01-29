var app = angular.module("mainApp", []);

// We no need to return
app.service("fromService", function () {
    this.message = "This is from App Service";
});


// we need to return object
app.factory("fromFactory", function () {
    var factory = {};
    factory.message = "This is from App Factory";
    return factory;
});

//Below code is not working
app.provider("fromProvider0", function () {
    this.m1 = "This is from App provider";
    return {
        $get: function () {
            return {
                message: this.m1
            }
        }
    }
});


//This is working code
app.provider("fromProvider", function () {
    var m1 = "This is from App provider";
    return {
        setName : function(name){
            m1+= name;
        },
        $get: function () {
            return {
                message: m1
            }
        }
    }
});


app.provider("fromProvider1", function () {
    this.m1 = "This is from App provider1";
    this.$get= function(){
        return {
            message: this.m1
        }
    };
});

app.config(function (fromProviderProvider) {
    fromProviderProvider.setName("  <b>Jagadeesh</b>   ");
});

app.controller("app0", function ($scope, fromService, fromFactory, fromProvider0) {
    $scope.greetMessage = [fromService.message, fromProvider0.message, fromFactory.message]
});

app.controller("app1", function ($scope,fromService, fromFactory, fromProvider1) {
    $scope.greetMessage = [fromService.message, fromProvider1.message, fromFactory.message]
});

app.controller("app2", function ($scope, fromService, fromFactory, fromProvider) {
    $scope.greetMessage = [fromService.message, fromProvider.message, fromFactory.message]
});