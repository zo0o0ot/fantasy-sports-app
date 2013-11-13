'use strict';

angular.module('fantasyApp.controllers.leagues', ['fantasyApp.services.leagues'])
  .controller('LeaguesController', ['$scope', '$routeParams', '$location', 'angularFire', 'Leagues',
    function($scope, $routeParams, $location, angularFire, Leagues) {
      angular.extend($scope, {
        league: {},
        leagueId: $routeParams.leagueId,
        findLeagues: function () {
          $scope.leagues = Leagues.collection();
        },
        findOneLeague: function (leagueId) {
          if(!!$scope.leagueId) {
            angularFire(Leagues.find($routeParams.leagueId), $scope, 'league');
          }
        },
        createLeague: function () {
          var leagueId = Leagues.create($scope.league, $scope.auth, function(err){
            if (!err) {
              $scope.league = null;
              $location.path('/leagues/'+leagueId);
              $scope.$apply();
            }
          });

        },
        removeLeague: function (leagueId) {
          Leagues.removeLeague(leagueId);
        }
      });
    }])