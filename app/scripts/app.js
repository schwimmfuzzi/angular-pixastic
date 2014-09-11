'use strict';

/**
 * @ngdoc overview
 * @name angularPixasticApp
 * @description
 * # angularPixasticApp
 *
 * Main module of the application.
 */
angular
  .module('angularPixasticApp', [
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
      .when('/complete', {
        templateUrl: 'views/complete.html',
        controller: 'CompleteCtrl'
      })
      .when('/source', {
        templateUrl: 'views/source.html',
        controller: 'SourceCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
