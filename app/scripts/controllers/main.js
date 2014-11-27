'use strict';

/**
 * @ngdoc function
 * @name spellingWpProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the spellingWpProjectApp
 */
angular.module('spellingWpProjectApp')
  .controller('MainCtrl',  function ($scope, SpellingAssignment ) {
    // AngularJS will instantiate a singleton by calling "new" on self function
    
    var self = this;
    self.assignments = SpellingAssignment.query();
    self.assignment = new SpellingAssignment(); 
    self.checkIfMisspelled = function (word,assignment){
        return assignment.checkIfMisspelled(word);
    };

    self.addAssignment = function(){
        console.log(self.assignment);
        self.assignment.$save();
        self.assignments.push(self.assignment);
        self.assignment = new SpellingAssignment();
        //$scope.spellingAssignment.url = 'test';
    };

    self.updateAssignment =function(assignment,index){
        SpellingAssignment.update({id:assignment.id}, assignment);
        
    };

    self.removeAssignment= function(assignment,index){
        console.log(assignment);
        assignment.$delete();
        self.assignments.splice(index,1);
    };
  });
