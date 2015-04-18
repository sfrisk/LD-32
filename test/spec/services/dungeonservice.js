'use strict';

describe('Service: dungeonService', function () {

  // load the service's module
  beforeEach(module('mathLandAppApp'));

  // instantiate service
  var dungeonService;
  beforeEach(inject(function (_dungeonService_) {
    dungeonService = _dungeonService_;
  }));

  it('should do something', function () {
    expect(!!dungeonService).toBe(true);
  });

});
