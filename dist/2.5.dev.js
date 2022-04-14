"use strict";

var nbr = 42;
var numberFavorite = prompt("What is your favorite number");

while (nbr != numberFavorite) {
  alert("Are you sure");
  numberFavorite = prompt("What is your favorite number");
}