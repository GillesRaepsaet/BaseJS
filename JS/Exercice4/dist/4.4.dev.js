"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function pickN(inputArray, n) {
  if (n >= inputArray.length) return inputArray;

  var inputCopy = _toConsumableArray(inputArray);

  var selectedElements = [];

  for (var i = 0; i < n; i++) {
    var randomIndex = Math.floor(Math.random() * inputCopy);
    selectedElements.push(inputCopy[randomIndex]);
    inputCopy.splice(randomIndex, 1);
  }

  return selectedElements;
}

var learners = ['Emre', 'Gilles', 'Jamie', 'Jason', 'Jeremy', 'Martin', 'Rayane', 'Rayhan', 'Ricardo', 'Sebastien', 'Steffanie', 'Tanguy', 'Thibaud', 'Zakaria', 'Eric'];
console.log(pickN(learners, 5));