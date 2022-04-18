"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var listArray = [52, 123, 4, 8, 12, 130, 8]; // Some elegant ES6 solutions : 

var min = Math.min.apply(Math, _toConsumableArray(arr));
var max = Math.max.apply(Math, _toConsumableArray(arr)); // The old-fashioned way :

var minimum = listArray[0];
var maximum = listArray[0];

for (var _i = 0, _listArray = listArray; _i < _listArray.length; _i++) {
  var element = _listArray[_i];

  if (element < minimum) {
    minimum = element;
  }

  if (element > maximum) {
    maximum = element;
  }
}