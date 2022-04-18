"use strict";

var testArray1 = [1, 2, 3, 4, 5];
var testArray2 = [100, 101, 102];
var testSum1 = 0;
var testSum2 = 0;

for (var _i = 0, _testArray = testArray1; _i < _testArray.length; _i++) {
  var element = _testArray[_i];
  testSum1 += element / testArray1.length;
}

console.log(testSum1 === 3); // should output true

for (var _i2 = 0, _testArray2 = testArray2; _i2 < _testArray2.length; _i2++) {
  var _element = _testArray2[_i2];
  testSum2 += _element / testArray2.length;
}

console.log(testSum2 === 101);