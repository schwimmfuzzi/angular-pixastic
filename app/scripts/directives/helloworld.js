'use strict';

/**
 * @ngdoc directive
 * @name angularPixasticApp.directive:helloWorld
 * @description
 * # helloWorld
 */
angular.module('angularPixasticApp')
  .directive('ngPixastic', function ()
  {
    return {
      	restrict: 'E',
      	scope: {
		  img: '=',
		  filter:'@',
		  apply: '&'
		},
		require: '^ngController',
      	templateUrl: 'views/completeTpl.html'
	  };
  })
  .directive('ngPixasticSource', function ()
  {
    return {
      	restrict: 'E',
      	scope: {
		  img: '='
		},
		require: '^ngController',
      	templateUrl: 'views/sourceTpl.html'
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

