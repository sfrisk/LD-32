'use strict';

/**
 * @ngdoc function
 * @name mathLandAppApp.controller:PlayerCtrl
 * @description
 * # PlayerCtrl
 * Controller of the mathLandAppApp
 */
angular.module('mathLandAppApp')
  .controller('PlayerCtrl', function ($scope, playerService) {
    $scope.player = {};

    function _refreshView() {
      $scope.player = playerService.getPlayer();
    }

    _refreshView();
  });
