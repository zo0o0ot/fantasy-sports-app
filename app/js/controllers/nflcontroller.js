'use strict';

angular.module('fantasyApp.controllers.nfl', ['fantasyApp.services.nfl'])
  .controller('NFLController', ['$scope', '$routeParams', 'NFL',
    function($scope, $routeParams, NFL) {
      angular.extend($scope, {
        nflteams: NFL.teams,
        nflteam: NFL.teams[$routeParams['nflTeamId']]
      });
    }]);