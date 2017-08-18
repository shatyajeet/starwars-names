var uniqueRandomArray = require('unique-random-array');

var starWarsNames = require('./starwars-names.json');

var getRandomName = uniqueRandomArray(starWarsNames);

function random (number) {
  if (typeof number === 'undefined') {
    return getRandomName();
  } else {
    var randomNames = [];
    for (var i = 0; i < number; i++) {
      randomNames.push(getRandomName());
    }
    return randomNames;
  }
}

module.exports = {
  all: starWarsNames,
  random: random
};
