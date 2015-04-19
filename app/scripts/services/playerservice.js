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
      'name': 'Anita',
      'hp': 10,
      'xp':     0,
      'location': null,
      'start': null
    };

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

    // function _getPlayerName() {
    //   return _player.name;
    // }
    //
    // function _updateXP(xp) {
    //   return _player.xp + xp;
    // }
    //
    // function _updateHealth(health) {
    //   return _player.health + health;
    // }

    function _getPlayer() {
      return _player;
    }

    function _updatePlayer(player) {
      _player = player;
    }

    return {
      setPlayerLocation: _setPlayerLocation,
      getPlayerLocation: _getPlayerLocation,
      setStartingLocation: _setStartingLocation,
      getStartingLocation: _getStartingLocation,
      getPlayer: _getPlayer,
      updatePlayer: _updatePlayer
    };

  });
