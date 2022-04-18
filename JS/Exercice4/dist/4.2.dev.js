"use strict";

function rand10(min, max) {
  return Math.random() * (max - min) + min;
}

console.log(rand10(1, 10));