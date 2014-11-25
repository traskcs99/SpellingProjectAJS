'use strict';

describe('Service: SpellingAssignmentService', function () {

  // load the service's module
  beforeEach(module('spellingWpProjectApp'));

  // instantiate service
  var SpellingAssignmentService;
  beforeEach(inject(function (_SpellingAssignmentService_) {
    SpellingAssignmentService = _SpellingAssignmentService_;
  }));

  it('should do something', function () {
    expect(!!SpellingAssignmentService).toBe(true);
  });

});
