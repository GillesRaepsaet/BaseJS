"use strict";

var originalArray = ['Aizen', 'Ichigo', 'Yhwach']; // The modern, effective way

var copy1 = [].concat(originalArray); // Some other methods :

var copy2 = Array.from(originalArray);
var copy3 = originalArray.slice(); // The ugly way

var copy4 = [];

for (var _i = 0, _originalArray = originalArray; _i < _originalArray.length; _i++) {
  var element = _originalArray[_i];
  copy4.push(element);
}