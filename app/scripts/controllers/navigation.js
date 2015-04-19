'use strict';

/**
 * @ngdoc function
 * @name mathLandAppApp.controller:NavigationCtrl
 * @description
 * # NavigationCtrl
 * Controller of the mathLandAppApp
 */
angular.module('mathLandAppApp')
  .controller('NavigationCtrl', function ($scope, playerService, dungeonService) {
    var _player = playerService.getPlayer();
    var _map = dungeonService.getMap();

    function isFog(x,y) {
      return _map[x][y].fog == true;
    }

    function isMonster(x,y) {
      return _map[x][y].monster == true;
    }

    $scope.canMoveNorth = function() {
      return _map[_player.location[0]][_player.location[1]].north == true
      && ( ( isFog(_player.location[0],_player.location[1]-1) && !isMonster(_player.location[0], _player.location[1]) )
      || !isFog(_player.location[0],_player.location[1]-1) );
    }

    $scope.canMoveSouth = function() {
      return _map[_player.location[0]][_player.location[1]].south == true
        && ( (isFog(_player.location[0],_player.location[1]+1) && !isMonster(_player.location[0], _player.location[1]) )
        || !isFog(_player.location[0],_player.location[1]+1) );
    }

    $scope.canMoveEast = function() {
      return _map[_player.location[0]][_player.location[1]].east == true
      && ( (isFog(_player.location[0]+1,_player.location[1]) && !isMonster(_player.location[0], _player.location[1]) )
      || !isFog(_player.location[0]+1,_player.location[1]) );
    }

    $scope.canMoveWest = function() {
      return _map[_player.location[0]][_player.location[1]].west == true
      && ( (isFog(_player.location[0]-1,_player.location[1]) && !isMonster(_player.location[0], _player.location[1]) )
      || !isFog(_player.location[0]-1,_player.location[1]) );
    }

    $scope.moveWest = function() {
      playerService.setPlayerLocation(_player.location[0]-1,_player.location[1]);
      _map[_player.location[0]][_player.location[1]].fog = false;
    }

    $scope.moveEast = function() {
      playerService.setPlayerLocation(_player.location[0]+1,_player.location[1]);
      _map[_player.location[0]][_player.location[1]].fog = false;
    }

    $scope.moveSouth = function() {
      playerService.setPlayerLocation(_player.location[0],_player.location[1]+1);
      _map[_player.location[0]][_player.location[1]].fog = false;
    }

    $scope.moveNorth = function() {
      playerService.setPlayerLocation(_player.location[0],_player.location[1]-1);
      _map[_player.location[0]][_player.location[1]].fog = false;
    }

  
  });
