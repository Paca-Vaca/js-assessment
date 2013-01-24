if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn(arr[0], arr[1], arr[2]);
    },

    speak : function(fn, obj) {
        return fn.call(obj);
    },

    functionFunction : function(str) {
        var prefix = str;
        return function(arg) {
            return prefix + ", " + arg;
        }
    },

    makeClosures : function(arr, fn) {
        var result = [];
        for ( var i = 0; i < arr.length; i++ ) {
            result.push(
                function(arg) {
                    return function () {
                            return fn(arg);
                        }
                }(arr[ i ])
                        
                )
        }

        return result;
    },

    partial : function(fn, str1, str2) {
        var func = function(arg) {
            return fn(str1, str2, arg);
        }

        return func;
    },

    useArguments : function() {
        var result = 0;
        for (var i = 0; i < arguments.length; i++) {
            result += arguments[ i ];
        }

        return result;
    },

    callIt : function(fn) {
        var param = [];
        for (var i = 1; i < arguments.length; i++) {
            param.push(arguments[ i ]);
        }

        return fn.apply(null, param);     
    },

    partialUsingArguments : function(fn) {
        var slice = Array.prototype.slice;
        var storedArgs = slice.call(arguments, 1);

        return function () {
            var newArgs = slice.call(arguments),
                args = storedArgs.concat(newArgs);

            return fn.apply(null, args);
        }
    },

    curryIt : function(fn) {
        var fn = arguments[0];
        var args = [];
        var result = function(arg){
                for (var i = 0; i < arguments.length; i++) args.push(arguments[i])
                if (args.length === 3) {
                        return fn.apply(null, args)
                } else {
                        return result
                }

        }
        return result
    }
  };
});
