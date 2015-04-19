'use strict';

/**
 * @ngdoc function
 * @name mathLandAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mathLandAppApp
 */
angular.module('mathLandAppApp')
	.controller('MainCtrl', function ($scope, dungeonService, playerService) {
			var width = 3;
			var height = 3;
			var _begin = true;


			function _newLevel() {
				dungeonService.initialize(width,height);
				playerService.setPlayerLocation(width-1,height-1);
				dungeonService.removeFog(width-1, height-1);
			}

			angular.extend($scope, {
				isOverlay: function(){
					return this.isBeginning() || this.isEndOfLevel() || this.playerDeath();
				},
				isBeginning: function() {
					return _begin === true;
				},
				isEndOfLevel: function() {
					return playerService.getPlayerLocation()[0] === 0 && playerService.getPlayerLocation()[1] === 0 &&	dungeonService.isMonster(0,0) === false;
				},
				start: function() {
					_begin = false;
				},

				restart: function() {
					_newLevel();
				},

				playerDeath: function() {
					return playerService.getHP() === 0;
				},

				cleanRestart: function() {
					playerService.resetPlayer();
					_newLevel();
				}

			});

			_newLevel();

	});
