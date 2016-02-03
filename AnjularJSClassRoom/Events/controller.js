angular.module("myApp.controllers", []);

angular.module("myApp.controllers")
        .controller("MessageController", function ($scope, $timeout) {
            $scope.message = [{
                sender: "Jagadeesh",
                text: "Message1"
            }];

            var timer;
            var count = 0;

            $scope.loadMessage = function () {
                count++;
                $scope.message.push({
                    sender: "Jagadeesh",
                    text: "Random Message " + count
                });

                timer = $timeout($scope.loadMessage, 2000);
                if (count == 3) {
                    $scope.$broadcast("EVENT_NO_DATA", "Not Connected");
                    $timeout.cancel(timer);
                }
            };

            timer = $timeout($scope.loadMessage, 2000);
            $scope.$on("EVENT_RECIVED", function (event, data) {
                console.log("Recived Emitted data");
            });
        });

angular.module("myApp.controllers")
        .controller("StartController", function ($scope) {

            $scope.name = "World of events";
            $scope.status = "Connected";
            $scope.statusColor = "green";

            $scope.$on("EVENT_NO_DATA", function (event, data) {
                console.log("Revived broadcasted event");
                $scope.status = data;
                $scope.statusColor = "red";

                $scope.$emit("EVENT_RECIVED", "I Got your data");
            });
        });