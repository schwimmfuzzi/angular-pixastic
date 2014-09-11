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


    $scope.mona = {file:'monalisa.jpg'};
    $scope.earth = {file:'earth.png'};


    function doTest(test) {
        var img = document.getElementById('original-image'),
            canvas = document.getElementById('output-canvas'),
            ctx = canvas.getContext('2d'),
            // progress = document.getElementById('progress-inner'),
            P;

        canvas.style.display = 'none';
        canvas.width = img.width;
        canvas.height = img.height;
        canvas.title = test.effect;
        ctx.drawImage(img, 0, 0);

        P = new Pixastic(ctx);
        P[test.effect](test.options).done(function() {
            canvas.style.display = 'block';
        }, function(p) {
            // progress.style.height = (p * 100) + '%';
        });
    }

    $scope.applyFilter = function()
    {
        var mosaic =  {
                effect : 'mosaic',
                options : {
                    blockSize : 3
                }
            };
        doTest(mosaic);
    }


  });
