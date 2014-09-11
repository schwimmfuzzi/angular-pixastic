'use strict';

describe('Controller: SourceCtrl', function () {

  // load the controller's module
  beforeEach(module('angularPixasticApp'));

  var SourceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SourceCtrl = $controller('SourceCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
