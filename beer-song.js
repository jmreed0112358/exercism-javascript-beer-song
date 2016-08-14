var NotImplementedException = require('./exceptions/NotImplementedException.js'),
  InvalidParameterException = require('./exceptions/InvalidParameterException.js');

const MIN = 0;
const MAX = 99;
const BOTTLE_WORD = 'bottle';
const ON_THE_WALL = 'of beer on the wall';
const OF_BEER = 'of beer';
const TAKE_ONE_DOWN = 'Take one down and pass it around';
const TAKE_IT_DOWN = 'Take it down and pass it around';
const GO_TO_STORE = 'Go to the store and buy some more';

var BeerSong = function() {};

BeerSong.prototype.verse = function(verseNum) {
  var output = '';

  if (this.validateVerse(verseNum)) {
    if (verseNum === 2) {
      output = verseNum + ' ' + BOTTLE_WORD + 's ' + ON_THE_WALL + ', ' + verseNum + ' ' + BOTTLE_WORD + 's ' + OF_BEER + '.';
      output = output + '\n';
      output = output + TAKE_ONE_DOWN + ', ' + (verseNum - 1) + ' ' + BOTTLE_WORD + ' ' + ON_THE_WALL + '.';
      output = output + '\n';
    } else if (verseNum === 1) {
      output = verseNum + ' ' + BOTTLE_WORD + ' ' + ON_THE_WALL + ', ' + verseNum + ' ' + BOTTLE_WORD + ' ' + OF_BEER + '.';
      output = output + '\n';
      output = output + TAKE_IT_DOWN + ', ' + 'no more ' + BOTTLE_WORD + 's ' + ON_THE_WALL + '.';
      output = output + '\n';
    } else if (verseNum === 0) {
      output = 'No more ' + BOTTLE_WORD + 's ' + ON_THE_WALL + ', no more ' + BOTTLE_WORD + 's ' + OF_BEER + '.';
      output = output + '\n';
      output = output + GO_TO_STORE + ', ' + MAX + ' ' + BOTTLE_WORD + 's ' + ON_THE_WALL + '.';
      output = output + '\n';
    } else {
      output = verseNum + ' ' + BOTTLE_WORD + 's ' + ON_THE_WALL + ', ' + verseNum + ' ' + BOTTLE_WORD + 's ' + OF_BEER + '.';
      output = output + '\n';
      output = output + TAKE_ONE_DOWN + ', ' + (verseNum - 1) + ' ' + BOTTLE_WORD + 's ' + ON_THE_WALL + '.';
      output = output + '\n';
    }
  } else {
    throw new InvalidParameterException('Invalid verseNum');
  }

  return output;
};

BeerSong.prototype.sing = function(startVerse, endVerse) {
  var i = 0,
    output = '';

  if (this.validateRange(startVerse, endVerse)) {
    if (endVerse === undefined) {
      endVerse = MIN;
    }

    for (i = startVerse ; i >= endVerse ; i--) {
      output = output + this.verse(i);
      if (i !== endVerse) {
        output = output + '\n';
      }
    }
  } else {
    throw new InvalidParameterException('Invalid verse range');
  }

  return output;
};

BeerSong.prototype.validateRange = function(startVerse, endVerse) {
  if (endVerse === undefined) {
    return this.validateVerse(startVerse);
  } else {
    return (startVerse >= endVerse && this.validateVerse(startVerse) && this.validateVerse(endVerse));
  }
};

BeerSong.prototype.validateVerse = function(verseNum) {
  return MIN <= verseNum && MAX >= verseNum;
};

module.exports = BeerSong;