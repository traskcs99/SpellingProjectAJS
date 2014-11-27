'use strict';

/**
 * @ngdoc service
 * @name spellingWpProjectApp.SpellingAssignment
 * @description
 * # SpellingAssignmentService
 * Service in the spellingWpProjectApp.
 */
angular.module('spellingWpProjectApp' )
  .factory('SpellingAssignment', function ($resource) {
    
    var self = this;

    var Assignment = $resource('spelling/api/spelling_assignment/:id/',{
        id: '@id'},
        {
            query: {
                method: 'GET', 
                isArray: true
        },
            update:{
                method: 'PUT'
                
        }
    }); 

    Assignment.prototype.list = function(){
        this.query();};
        
         //self.assignments = self.list();
        //return self.resource.query();
    //};

    //Assignment.assignments = this.list();

    Assignment.prototype.checkIfMisspelled =function(word){
        var misspelledWords = $.map(this.misspelled_words,function(v,k){
            return v.text;
        });
        if ($.inArray(word.text,misspelledWords)>-1){
            return true;
        }
        return false;
    };
   
    return Assignment;
  });
