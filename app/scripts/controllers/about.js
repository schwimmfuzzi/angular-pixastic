'use strict';

/**
 * @ngdoc function
 * @name angularPixasticApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularPixasticApp
 */
angular.module('angularPixasticApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
