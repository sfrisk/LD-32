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
      dungeonService.initialize(width,height);
      playerService.setPlayerLocation(width-1,height-1);
  });
