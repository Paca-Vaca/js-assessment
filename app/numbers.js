if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
        return (num >> bit - 1) % 2;
    },

    base10: function(str) {
        return parseInt(str, 2);
    },

    convertToBinary: function(num) {
        var val = num.toString(2);
        if (val.length < 8) {
            val = "0" + val;
        }
        return val;
    },

    multiply: function(a, b) {
        return parseFloat((a * b).toPrecision(1));
    }
  };
});

