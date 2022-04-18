"use strict";

function calcSurface(length, width) {
  return length * width;
}

var calcSurfaceArrow = function calcSurfaceArrow(length, width) {
  return length * width;
};

var x = Number(prompt('length ?'));
var y = Number(prompt('width ?'));
console.log(calcSurface(x, y));