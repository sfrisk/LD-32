'use strict';

/**
 * @ngdoc function
 * @name mathLandAppApp.controller:MapCtrl
 * @description
 * # MapCtrl
 * Controller of the mathLandAppApp
 */
angular.module('mathLandAppApp')
	.controller('MapCtrl', function ($scope, dungeonService, playerService) {
		var _map = [];
		var width = 3;
		var height = 3;
		var _player = null;

		function _initialize() {
			_map = dungeonService.initialize(width,height);
			playerService.setPlayerLocation(width-1,height-1);
			_player = playerService.getPlayerLocation();
      _map[width-1][height-1].fog = false;
		}

		$scope.isPlayerHere = function(x,y) {
			return _player[0] == x && _player[1] == y;
		}

    $scope.isFog = function(x,y) {
      return _map[x][y].fog == true;
    }

    $scope.isMonster = function(x,y) {
      return _map[x][y].monster == true;
    }

		$scope.getXCount = function() {
			var x;
			var arr = [];
			for (x = 0; x < width; x++) {
				arr.push(x);
			}
			return arr;
		}

		$scope.getYCount = function() {
			var y;
			var arr = [];
			for (y = 0; y < height; y++) {
				arr.push(y);
			}
			return arr;
		};

		$scope.getWidth = function() {
			return width;
		}

		$scope.getHeight = function() {
			return height;
		}

		$scope.getRoom = function(x,y) {
			return _map[x][y];
		}

		$scope.getNorth = function(x,y) {
			return _map[x][y].north;
		}

		$scope.getEast = function(x,y) {
			return _map[x][y].east;
		}

		$scope.getWest = function(x,y) {
			return _map[x][y].west;
		}

		$scope.getSouth = function(x,y) {
			return _map[x][y].south;
		}

    $scope.canMoveNorth = function() {
      return $scope.getNorth(_player[0], _player[1]) == true
      && ( ( $scope.isFog(_player[0],_player[1]-1) && !$scope.isMonster(_player[0], _player[1]) )
      || !$scope.isFog(_player[0],_player[1]-1) );
    }

    $scope.canMoveSouth = function() {
      return $scope.getSouth(_player[0], _player[1]) == true
        && ( ($scope.isFog(_player[0],_player[1]+1) && !$scope.isMonster(_player[0], _player[1]) )
        || !$scope.isFog(_player[0],_player[1]+1) );
    }

    $scope.canMoveEast = function() {
      return $scope.getEast(_player[0], _player[1]) == true
      && ( ($scope.isFog(_player[0]+1,_player[1]) && !$scope.isMonster(_player[0], _player[1]) )
      || !$scope.isFog(_player[0]+1,_player[1]) );
    }

    $scope.canMoveWest = function() {
      return $scope.getWest(_player[0], _player[1]) == true
      && ( ($scope.isFog(_player[0]-1,_player[1]) && !$scope.isMonster(_player[0], _player[1]) )
      || !$scope.isFog(_player[0]-1,_player[1]) );
    }

    $scope.moveWest = function() {
      playerService.setPlayerLocation(_player[0]-1,_player[1]);
      _player = playerService.getPlayerLocation();
      _map[_player[0]][_player[1]].fog = false;
    }

    $scope.moveEast = function() {
      playerService.setPlayerLocation(_player[0]+1,_player[1]);
      _player = playerService.getPlayerLocation();
      _map[_player[0]][_player[1]].fog = false;
    }

    $scope.moveSouth = function() {
      playerService.setPlayerLocation(_player[0],_player[1]+1);
      _player = playerService.getPlayerLocation();
      _map[_player[0]][_player[1]].fog = false;
    }

    $scope.moveNorth = function() {
      playerService.setPlayerLocation(_player[0],_player[1]-1);
      _player = playerService.getPlayerLocation();
      _map[_player[0]][_player[1]].fog = false;
    }


		_initialize();
	});
