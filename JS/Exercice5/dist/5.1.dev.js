"use strict";

function askTvSerie() {
  var tvSerie = {
    name: prompt('What is the name of the serie?'),
    productionYear: prompt('Which year was it produced?'),
    cast: []
  };
  var askCast = prompt('Enter a cast member', 'end');

  while (askCast !== 'end') {
    tvSerie.cast.push(askCast);
    askCast = prompt('Enter a cast member (or write "end" to stop)', 'end');
  }

  return tvSerie;
}

console.log(askTvSerie());