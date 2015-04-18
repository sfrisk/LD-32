'use strict';

/**
 * @ngdoc service
 * @name mathLandAppApp.playerService
 * @description
 * # playerService
 * Service in the mathLandAppApp.
 */
angular.module('mathLandAppApp')
  .service('playerService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var _player = {
      'health': 10,
      'xp':     0,
      'location': null,
      'start': null
    }

    function _setPlayerLocation(x,y) {
      _player.location = [x,y];
    }

    function _getPlayerLocation() {
      return _player.location;
    }

    function _setStartingLocation(x,y) {
      _player.start = [x,y];
    }

    function _getStartingLocation() {
      return _player.start;
    }

    return {
      setPlayerLocation: _setPlayerLocation,
      getPlayerLocation: _getPlayerLocation,
      setStartingLocation: _setStartingLocation,
      getStartingLocation: _getStartingLocation
    }

  });
