"use strict";

function rand10() {
  return 1 + Math.floor(Math.random() * 10);
}

function multiLists(n) {
  var randList = [];

  for (var i = 0; i < n; i++) {
    randList.push(rand10());
  }

  return randList;
}

console.log(multiLists(5));