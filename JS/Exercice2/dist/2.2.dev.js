"use strict";

var min = number(prompt("Please your enter one number minimum"));
var max = number(prompt("Please your enter one number maximum"));
var current = number(prompt("Please your one number"));

if (min > max) {
  if (min < current && max > current) {
    console.log('Current is between max & min');
  } else {
    console.log("Current is not between min and max");
  }
} else {
  console.log("Are you kidding me !");
}