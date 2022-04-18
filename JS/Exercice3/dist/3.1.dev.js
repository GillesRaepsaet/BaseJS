"use strict";

var listArray1 = [1, 2, 3, 4, 5];
var listArray2 = [100, 101, 102];
var listSum1 = 0;
var listSum2 = 0;

for (var _i = 0, _listArray = listArray1; _i < _listArray.length; _i++) {
  var element = _listArray[_i];
  listSum1 += element;
}

console.log(listSum1 === 15); // should output true

for (var _i2 = 0, _listArray2 = listArray2; _i2 < _listArray2.length; _i2++) {
  var _element = _listArray2[_i2];
  listSum2 += _element;
}

console.log(listSum2 === 303);