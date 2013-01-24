if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item);
    },

    sum : function(arr) {
        var result = 0;
        for (var i = 0; i < arr.length; i++) {
            result += arr[ i ];
        }

        return result;
    },

    remove : function(arr, item) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[ i ] == item) {
                arr.splice(i, 1);
            }
        }
        return arr;
    },
    
    removeWithoutCopy : function(arr, item) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[ i ] == item) {
                arr.splice(i, 1);
                i--;
            }
        }
        return arr;
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    concat : function(arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count : function(arr, item) {
        var result = 0;
        for (var i = 0; i < arr.length; i++) {
            if (arr[ i ] == item) {
                result++;
            }
        }

        return result;
    },

    duplicates : function(arr) {
        var sorted_arr = arr.sort();
        var results = [];
        for (var i = 0; i < sorted_arr.length; i++) {
            if (sorted_arr[ i ] == sorted_arr[ i + 1 ]) {
                results.push(sorted_arr[ i ]);
            }
        }

        return results;
    },

    square : function(arr) {
        var results = [];
        for (var i = 0; i < arr.length; i++) {
            results.push(arr[ i ] * arr[ i ]);
        }

        return results;
    },

    findAllOccurrences : function(arr, target) {
        var results = [];
        for (var i = 0; i < arr.length; i++) {
            if (arr[ i ] == target) {
                results.push(i);
            }
        }

        return results;
    }
  };
});
