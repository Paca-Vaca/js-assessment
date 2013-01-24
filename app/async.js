if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
    	var dfd = $.Deferred();
    	window.setTimeout(function(){
    		dfd.resolve(value);
    	}, 1000);
    	return dfd.promise();
    },

    manipulateRemoteData : function(url) {
    	var dfd = $.Deferred();

    	var get = $.ajax({
    		url: url,
    		success: function(data) {
    			var people = data.people;
    			console.log(people);
	    		var result = [];
	    		for (var i = 0; i < people.length; i++) {
	    			result.push(people[ i ].name);
	    		}
	    		result.sort();
	    		dfd.resolve(result);
	    		}
    	});
    	return dfd.promise();
    }
  };
});
