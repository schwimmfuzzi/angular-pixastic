'use strict';

/**
 * @ngdoc function
 * @name angularPixasticApp.controller:SourceCtrl
 * @description
 * # SourceCtrl
 * Controller of the angularPixasticApp
 */
angular.module('angularPixasticApp')
  .controller('SourceCtrl', function ($scope)
  {  
    $scope.mona = {file:'monalisa.jpg'};
    $scope.earth = {file:'earth.png'};
  });
