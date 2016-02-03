var app = angular.module("myApp", []);
app.filter("somthingAdd", function () {
    return function (input, sPostion, lPostion) {
        console.log("Parameter is  : " + sPostion + " to " + lPostion)
        var res = "";
        input = input || "";



        for (var i = 0; i < sPostion; i++)
        {
            res = input.charAt(i) + res
        }
        return res;
    }
});