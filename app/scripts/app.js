'use strict';

/**
 * @ngdoc overview
 * @name mathLandAppApp
 * @description
 * # mathLandAppApp
 *
 * Main module of the application.
 */
angular
  .module('mathLandAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
