/// <reference path="angular.js" />


(function () {


    angular.module("app", [])
           .controller("appController",
        function ($scope) {

            $scope.IsTeamsAssigned = false;
            $scope.team1 = [];
            $scope.team2 = [];
            $scope.joker = null;

            $scope.BreckenRidgePlayers = [{ name: 'Yashwanth Kotla', Available: true, speciality: 'bowler' },
                            { name: 'Pavan Bhatraju', Available: true, speciality: 'allrounder' },
                            { name: 'Paladugu Prudhvi', Available: true, speciality: 'batsman' },
                            { name: 'Anupavan Muddana', Available: true, speciality: 'batsman' },
                            { name: 'Bugata Bhaskar Pavan', Available: true, speciality: 'batsman' },
                            { name: 'Harsha Karna', Available: true, speciality: 'allrounder' },
                            { name: 'Somayajulu Evani', Available: true, speciality: 'batsman' }
            ];

            $scope.AvailablePlayers = [];

            $scope.ShowToss = false;

            $scope.Toss = function() {

                $scope.ShowToss = true;

            }

            $scope.AssignTeams = function() {
                
                $scope.ShowToss = false;
                $scope.IsTeamsAssigned = false;
                $scope.team1 = [];
                $scope.team2 = [];
                $scope.joker = null;
                $scope.AvailablePlayers = [];

                angular.forEach($scope.BreckenRidgePlayers,
                             function (player) {

                                 if (player.Available === true) {

                                     $scope.AvailablePlayers.push(player);
                                 }

                             });

                if ($scope.AvailablePlayers.length % 2 !== 0) {
                    var randomVal = Math.floor(Math.random() * $scope.AvailablePlayers.length);

                    $scope.joker = $scope.AvailablePlayers[randomVal];

                    $scope.AvailablePlayers.splice(randomVal, 1);
                }

                $scope.NoOfPlayersInTeam = $scope.AvailablePlayers.length / 2;

                angular.forEach($scope.AvailablePlayers,
                    function(value) {
                        randomNumber = Math.floor(Math.random() * 100);

                        if (randomNumber % 2 == 0) {
                            if ($scope.team1.length < $scope.NoOfPlayersInTeam) {
                                $scope.team1.push(value);
                            } else {
                                $scope.team2.push(value);
                            }

                        } else {
                            if ($scope.team2.length < $scope.NoOfPlayersInTeam) {
                                $scope.team2.push(value);
                            } else {
                                $scope.team1.push(value);
                            }
                        }
                    });

                $scope.IsTeamsAssigned = true;
            }

        });


})();