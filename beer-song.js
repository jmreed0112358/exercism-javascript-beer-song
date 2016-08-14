var NotImplementedException = require('./exceptions/NotImplementedException.js'),
  InvalidParameterException = require('./exceptions/InvalidParameterException.js');

const MIN = 0;
const MAX = 99;

var BeerSong = function() {};

BeerSong.prototype.verse = function(verseNum) {
  throw new NotImplementedException();
};

BeerSong.prototype.sing = function(startVerse, endVerse) {
  throw new NotImplementedException();
};

BeerSong.prototype.validateRange = function(startVerse, endVerse) {
  if (endVerse === undefined) {
    return this.validateVerse(startVerse);
  } else {
    return (startVerse <= endVerse && this.validateVerse(startVerse) && this.validateVerse(endVerse));
  }
};

BeerSong.prototype.validateVerse = function(verseNum) {
  return MIN <= verseNum && MAX >= verseNum;
};

module.exports = BeerSong;