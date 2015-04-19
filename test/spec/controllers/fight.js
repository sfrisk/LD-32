'use strict';

describe('Controller: FightCtrl', function () {

  // load the controller's module
  beforeEach(module('mathLandAppApp'));

  var FightCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FightCtrl = $controller('FightCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
