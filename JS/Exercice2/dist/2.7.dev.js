"use strict";

var n = number(prompt("Please your enter number"));
var result = 0;

for (var i = 0; i < n; i++) {
  var current = number(prompt("please your enter number"));
  result += current;
}

console.log(result);