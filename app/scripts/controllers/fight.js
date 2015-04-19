'use strict';

/**
 * @ngdoc function
 * @name mathLandAppApp.controller:FightCtrl
 * @description
 * # FightCtrl
 * Controller of the mathLandAppApp
 */
angular.module('mathLandAppApp')
	.controller('FightCtrl', function ($scope, playerService, dungeonService, $timeout) {
	var _isFighting = false;
	var _player = playerService.getPlayer();
	var _map = dungeonService.getMap();
	var _start = false;
	var _end = false;
	var _answer = null;
	var _answerCorrect = null;
	var _sym = ['-','+','÷','x'];
  var _playerLoss = false;
  var _playerWin = false;

	$scope.variables = {};
	$scope.monsterHP = 10;
	$scope.timer = 0;
  $scope.answer = null;

	function _initialize() {
		$scope.variables = {
			'x': Math.floor(Math.random() * (10)) + 1,
			'y': Math.floor(Math.random() * (10)) + 1,
		};
		$scope.symbol = _sym[Math.round(Math.random()*3)];
		switch ($scope.symbol) {
			case '-':
				_answer = $scope.variables.x - $scope.variables.y;
				break;
			case '+':
				_answer = $scope.variables.x + $scope.variables.y;
				break;
			case 'x':
				_answer = $scope.variables.x * $scope.variables.y;
				break;
			default:
				var x = $scope.variables.x;
				$scope.variables.x = x * $scope.variables.y;
				_answer = x;
				break;
		}
		//_answerCorrect = null;
		$scope.answer = null;
	}

	angular.extend($scope, {
    recharge: function() {
      _player.hp = _player.hp - 3;
      this.startGame();
    },
    getPlayerHP: function() {
      return _player.hp;
    },
		isAnswer: function (){
			return _answerCorrect === true;
		},
		isIncorrect: function (){
			return _answerCorrect === false;
		},
		noGame: function(){
			return !_start && !_end;
		},
		startGame: function(){
			_start = true;
			_end = false;
      _playerLoss = false;
      _playerWin = false;
      if (this.monsterHP == 0) {
        this.monsterHP = 10;
      } else if (this.monsterHP != 10) {
        this.monsterHP += 3;
      }
			$scope.correct = 0;
			$scope.wrong = 0;
			$scope.timer = 0;
			$timeout($scope.increaseTimer, 1000);
		},
		playingGame: function(){
			return _start && !_end;
		},
		endGame: function() {
			return _start && _end;
		},
		increaseTimer: function(){
			$scope.timer++;
			if($scope.timer === 60 || _playerLoss || _playerWin){
				_end = true;
			} else {
				$timeout($scope.increaseTimer, 1000);
			}
		},
		checkAnswer: function(){
			_answerCorrect = parseInt(this.answer) === _answer;
			if(_answerCorrect) {
				this.monsterHP--;
        _player.xp++;
				_initialize();
        this.answer = null;
			}else{
				_player.hp--;
				this.answer = null;
			}
      if(this.monsterHP === 0) {
        _playerWin = true;
      }
      if(_player.hp === 0) {
        _playerLoss = true;
      }

		},
    isPlayerWin: function() {
      return _playerWin;
    },
    isPlayerLoss: function() {
      return _playerLoss;
    },
		isMonsterHere: function() {
			return _map[_player.location[0]][_player.location[1]].monster === true;
		},
		fightMonster: function() {
			_isFighting = true;
      _start = false;
      _end = false;
      this.monsterHP = 10;
      _initialize();
		},
		endFight: function() {
			_map[_player.location[0]][_player.location[1]].monster = false;
			_isFighting = false;
		},
		isFighting: function() {
			return _isFighting;
		}
	});

});
