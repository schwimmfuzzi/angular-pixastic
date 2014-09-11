'use strict';

/**
 * @ngdoc directive
 * @name angularPixasticApp.directive:helloWorld
 * @description
 * # helloWorld
 */
angular.module('angularPixasticApp')
  .directive('helloWorld', function ()
  {
    return {
      	restrict: 'E',
      	scope: {
		  img: '=img'
		},
      	templateUrl: 'views/helloworld-template.html'
      	
	  };
  })
  .directive('myCustomer', function() {
	    return {
	      restrict: 'E',
	      scope: {
	        peter: '=info'
	      },
	      templateUrl: 'views/my-customer-iso.html'
	    };
	})
  ;

