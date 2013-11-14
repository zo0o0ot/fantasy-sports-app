'use strict';

angular.module('fantasyApp.controllers.players', ['fantasyApp.services.players'])
  .controller('PlayersCtrl', ['$scope', '$routeParams', 'angularFire', 'NFL', 'Players',
    function ($scope, $routeParams, angularFire, NFL, Players) {
      angular.extend($scope, {
        positions: NFL.positions,
        nflteams: NFL.teams,
        searchsize: {
          'limit': 10
        },
        strictsearch: {},
        findPlayers: function () {
          $scope.players = Players.collection();
        },
        findOnePlayer: function () {
          angularFire(Players.find($routeParams.playerId), $scope, 'player');
        }
      });
    }])