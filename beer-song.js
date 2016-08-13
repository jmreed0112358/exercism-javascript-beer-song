var NotImplementedException = require('./exceptions/NotImplementedException.js'),
  InvalidParameterException = require('./exceptions/InvalidParameterException.js');

var BeerSong = function() {};

BeerSong.prototype.verse = function(verseNum) {
  throw new NotImplementedException();
};

BeerSong.prototype.sing = function(startVerse, endVerse) {
  throw new NotImplementedException();
};

BeerSong.prototype.validateRange = function(startVerse, endVerse) {
  throw new NotImplementedException();
};

BeerSong.prototype.validateVerse = function(verseNum) {
  return 0 <= verseNum && 99 >= verseNum;
};

module.exports = BeerSong;