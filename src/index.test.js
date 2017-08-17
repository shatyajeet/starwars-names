var expect = require('chai').expect;

var starWarsNames = require('./index');

describe('starwars-names', function () {
  describe('all', function () {
    it('should return an array of strings', function () {
      expect(starWarsNames.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings (array) {
        return array.every(function (item) {
          return typeof item === 'string';
        });
      }
    });

    it('should contain `Luke Skywalker`', function () {
      expect(starWarsNames.all).to.include('Luke Skywalker');
    });
  });

  describe('random', function () {
    it('should return a random name from starWarsNames.all', function () {
      var randomName = starWarsNames.random();
      expect(starWarsNames.all).to.include(randomName);
    });
  });
});
