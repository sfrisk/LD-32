'use strict';

/**
* @ngdoc service
* @name mathLandAppApp.dungeonService
* @description
* # dungeonService
* Service in the mathLandAppApp.
*/
angular.module('mathLandAppApp')
	.service('dungeonService', function () {
	// AngularJS will instantiate a singleton by calling "new" on this function
	var NORTH = 0;
	var SOUTH = 1;
	var WEST = 2;
	var EAST = 3;
	var _map = null;


	function _initialize(x,y) {
    _generateEmptyMap(x,y);
		_generateMap(x,y);
    return _map;
	}

	function _getMap() {
		return _map;
	}

	function _generateEmptyMap(width,height) {
		_map = [[]];
		for(var x = 0; x < width; x++){
			_map[x] = [];
			for(var y = 0; y < height; y++){
				_map[x].push({});
			}
		}
	}

	function _generateMap(width,height) {
		var x;
		var y;

		for (y = 0; y < height; y++){
			for (x = 0; x < width; x++) {
				_map[x][y] = {
					'north': null,
					'south': null,
					'east': null,
					'west': null,
          'fog': true,
          'monster': true,
          'kitten': false
				};

        if(x === width - 1 && y === height - 1) {
          _map[x][y].monster = false;
        }

        if(x === 0 && y === 0) {
          _map[x][y].kitten = true;
        }

				if (x === 0) {
					_map[x][y].west = false;
				}
				if (x === width-1) {
					_map[x][y].east = false;
				}
				if (x > 0 && _map[x-1][y].east === true) {
					_map[x][y].west = true;
				}
				if (x > 0 && _map[x-1][y].east === false) {
					_map[x][y].west = false;
				}
				if (y === 0) {
					_map[x][y].north = false;
				}
				if (y === height-1) {
					_map[x][y].south = false;
				}
				if (y > 0 && _map[x][y-1].south === true) {
					_map[x][y].north = true;
				}
				if (y > 0 && _map[x][y-1].south === false) {
					_map[x][y].north = false;
				}
				var directionsLeft = _getAvailableDirections(_map[x][y]);
				if (directionsLeft.length === 0) {

				}
				if (directionsLeft.length === 1) {
					_setDirection(_map[x][y], directionsLeft[0]);
				}
				if (directionsLeft.length > 1) {
					_setDirection(_map[x][y], directionsLeft[Math.floor(Math.random() * (directionsLeft.length))]);
				}
			}
		}
	}

	function _setDirection(room, direction) {
		if (direction === NORTH) {
			room.north = true;
		}
		if (direction === SOUTH) {
			room.south = true;
		}
		if (direction === EAST) {
			room.east = true;
		}
		if (direction === WEST) {
			room.west = true;
		}
    if(room.west === null) {
      room.west = false;
    }
    if(room.north === null) {
      room.north = false;
    }
    if(room.south === null) {
      room.south = false;
    }
    if(room.east === null) {
      room.east = false;
    }
	}

	function _getAvailableDirections(room) {
		var directions = [];
		if (room.north === null) {
			directions.push(NORTH);
		}
		if (room.south === null) {
			directions.push(SOUTH);
		}
		if (room.east === null) {
			directions.push(EAST);
		}
		if (room.west === null) {
			directions.push(WEST);
		}
		return directions;
	}

  function _removeFog(x,y){
    _map[x][y].fog = false;
  }

	return {
		initialize: _initialize,
		getMap: _getMap,
    removeFog: _removeFog
	};
});
