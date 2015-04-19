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
    var _isFighting = false;

		function _initialize() {
			_map = dungeonService.initialize(width,height);
			playerService.setPlayerLocation(width-1,height-1);
			_player = playerService.getPlayer();
			_map[width-1][height-1].fog = false;
		}

		$scope.isPlayerHere = function(x,y) {
			return _player.location[0] == x && _player.location[1] == y;
		}

		$scope.isFog = function(x,y) {
			return _map[x][y].fog == true;
		}

		$scope.isMonster = function(x,y) {
			return _map[x][y].monster == true;
		}

    $scope.isKitten = function(x,y) {
      return _map[x][y].kitten == true;
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




		_initialize();
	});
