'use strict';

/**
 * @ngdoc function
 * @name spellingWpProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the spellingWpProjectApp
 */
angular.module('spellingWpProjectApp')
  .controller('MainCtrl',  function ($scope, SpellingAssignmentService ) {
    // AngularJS will instantiate a singleton by calling "new" on self function
    
    var self = this;
    self.spellingAssignments = SpellingAssignmentService.query();
    
    self.checkIfMisspelled =function(word,spellingAssignment){
        var misspelledWords = $.map(spellingAssignment.misspelled_words,function(v,k){
            return v.text;
        });
        if ($.inArray(word.text,misspelledWords)>-1){
            return true;
        }
        console.log(word);
        return false;
    };
    

    self.addSpellingAssignment = function(){
        SpellingAssignmentService.save(self.spellingAssignment);
        self.spellingAssignments.push(self.spellingAssignment);
 
        self.spellingAssignment = new SpellingAssignmentService();
        //$scope.spellingAssignment.url = 'test';
    };

    self.removeSpellingAssignment = function(index){
        self.spellingAssignments.splice(index,1);
    };
  });
