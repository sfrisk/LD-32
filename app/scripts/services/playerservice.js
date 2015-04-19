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
      'name': 'Bee the Monster',
      'hp': 10,
      'xp': 0,
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

    function _getPlayer() {
      return _player;
    }

    function _updatePlayer(player) {
      _player = player;
    }

    function _getHP() {
      return _player.hp;
    }

    function _resetPlayer() {
      _player.hp = 10;
      _player.xp = 0;
    }

    function _isPlayerHere(x,y) {
      return _player.location[0] === x && _player.location[1] === y;
    }
    

    return {
      setPlayerLocation: _setPlayerLocation,
      getPlayerLocation: _getPlayerLocation,
      setStartingLocation: _setStartingLocation,
      getStartingLocation: _getStartingLocation,
      getPlayer: _getPlayer,
      updatePlayer: _updatePlayer,
      getHP: _getHP,
      resetPlayer: _resetPlayer,
      isPlayerHere: _isPlayerHere
    };

  });
