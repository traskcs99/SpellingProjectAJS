'use strict';

/**
 * @ngdoc service
 * @name spellingWpProjectApp.SpellingAssignmentService
 * @description
 * # SpellingAssignmentService
 * Service in the spellingWpProjectApp.
 */
angular.module('spellingWpProjectApp' )
  .service('SpellingAssignmentService', function ($resource) {
    return $resource('spelling/api/spelling_assignment/:spellingAssignmentID ',{},{
        query: {
            method: 'GET', 
            params: {spellingAssignmentID:''},
            isArray: true
        }
    });
  });
