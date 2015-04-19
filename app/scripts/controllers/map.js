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
			_map = dungeonService.getMap();
			_player = playerService.getPlayer();

		}

		$scope.isPlayerHere = function(x,y) {
			return playerService.isPlayerHere(x,y);
		};

		$scope.isFog = function(x,y) {
			return dungeonService.isFog(x,y);
		};

		$scope.isMonster = function(x,y) {
			return dungeonService.isMonster(x,y);
		};

		$scope.isKitten = function(x,y) {
			return _map[x][y].kitten === true;
		};

		$scope.getXCount = function() {
			var x;
			var arr = [];
			for (x = 0; x < width; x++) {
				arr.push(x);
			}
			return arr;
		};

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
		};

		$scope.getHeight = function() {
			return height;
		};

		$scope.getRoom = function(x,y) {
			return dungeonService.getRoom(x,y);
		};

		$scope.getNorth = function(x,y) {
			return dungeonService.getNorth(x,y);
		};

		$scope.getEast = function(x,y) {
			return dungeonService.getEast(x,y);
		};

		$scope.getWest = function(x,y) {
			return dungeonService.getWest(x,y);
		};

		$scope.getSouth = function(x,y) {
			return dungeonService.getSouth(x,y);
		};




		_initialize();
	});
