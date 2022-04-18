"use strict";

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

var fac = function fac(n) {
  return n === 0 ? 1 : n * fac(n - 1);
};