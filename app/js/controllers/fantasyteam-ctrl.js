'use strict';

angular.module('fantasyApp.controllers.fantasyTeams', ['fantasyApp.services.fantasyTeams'])
  .controller('FantasyTeamsCtrl', ['$scope', '$routeParams', '$location', 'angularFire', 'Leagues', 'FantasyTeams', 'FireRef',
    function($scope, $routeParams, $location, angularFire, Leagues, FantasyTeams, FireRef) {
      angular.extend($scope, {
        fantasyTeamId: $routeParams.fantasyTeamId,
        noFantasyTteam: !$routeParams.fantasyTeamId,
        findFantasyTeams: function() {
          $scope.fantasyTeams = FantasyTeams.collection();
        },
        findOneFantasyTeam: function() {
          if(!!$scope.fantasyTeamId) {
            angularFire(FantasyTeams.find($routeParams.fantasyTeamId), $scope, 'fantasyTeam');
          }
        },
        findLeagues: function() {
          $scope.leagues = Leagues.collection();
        },
        create: function() {
          FantasyTeams.create($scope.fantasyTeam, $scope.auth)
            .then(function(fantasyTeamId) {
              $scope.fantasyTeam = null;
              $location.path('/fantasyteams/'+fantasyTeamId);
            });
        },
        removeFantasyTeam: function(fantasyTeamId) {
          FantasyTeams.removeFantasyTeam(fantasyTeamId);
        }
      })
    }])