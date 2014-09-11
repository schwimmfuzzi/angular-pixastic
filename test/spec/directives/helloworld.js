'use strict';

describe('Directive: helloWorld', function () {

  // load the directive's module
  beforeEach(module('angularPixasticApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<hello-world></hello-world>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the helloWorld directive');
  }));
});
