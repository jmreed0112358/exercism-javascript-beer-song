var NotImplementedException = require('./exceptions/NotImplementedException.js'),
  InvalidParameterException = require('./exceptions/InvalidParameterException.js');

var BeerSong = function() {};

BeerSong.prototype.verse = function(verseNum) {
  throw new NotImplementedException();
};

BeerSong.prototype.sing = function(startLine, endLine) {
  throw new NotImplementedException();
};

BeerSong.prototype.validateRange = function(startLine, endLine) {
  throw new NotImplementedException();
};

BeerSong.prototype.validateVerse = function(verseNum) {
  throw new NotImplementedException();
};

module.exports = BeerSong;