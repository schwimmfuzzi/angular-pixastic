'use strict';

/**
 * @ngdoc function
 * @name angularPixasticApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularPixasticApp
 */
angular.module('angularPixasticApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
     $scope.naomi = { name: 'Naomi', address: '1600 Amphitheatre' };
    $scope.igor = { name: 'Igor', address: '123 Somewhere' };
  });
