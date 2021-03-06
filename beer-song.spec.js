var BeerSong = require('./beer-song'),
  InvalidParameterException = require('./exceptions/InvalidParameterException.js');

const MIN = 0;
const MAX = 99;

describe('verse()', function() {
  var song = new BeerSong();

  it('throws InvalidParameterException when given invalid verseNum, negative number', function() {
    expect(function() {
      song.verse(-10);
    }).toThrow(
      new InvalidParameterException('Invalid verseNum'));
  });

  it('throws InvalidParameterException when given invalid verseNum, out of range number', function() {
    expect(function() {
      song.verse(1000);
    }).toThrow(
      new InvalidParameterException('Invalid verseNum'));
  });

  it('prints an arbitrary verse', function() {
    var expected = '8 bottles of beer on the wall, 8 bottles of beer.\nTake one down and pass it around, 7 bottles of beer on the wall.\n';
    expect(song.verse(8)).toEqual(expected);
  });

  it('handles 1 bottle', function() {
    var expected = '1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n';
    expect(song.verse(1)).toEqual(expected);
  });

  it('handles 0 bottles', function() {
    var expected = 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';
    expect(song.verse(0)).toEqual(expected);
  });
});

describe('sing()', function() {
  var song = new BeerSong();

  it('throws InvalidParameterException when given invalid input: startVerse < endVerse', function() {
    expect(function() {
      song.sing(10, 20);
    }).toThrow(
      new InvalidParameterException('Invalid verse range'));
  });

  it('throws InvalidParameterException when given invalid input: valid startVerse, negative endVerse', function() {
    expect(function() {
      song.sing(10, -10);
    }).toThrow(
      new InvalidParameterException('Invalid verse range'));
  });

  it('throws InvalidParameterException when given invalid input: negative startVerse and endVerse', function() {
    expect(function() {
      song.sing(-20, -10);
    }).toThrow(
      new InvalidParameterException('Invalid verse range'));
  });

  it('throws InvalidParameterException when given invalid input: out of range startVerse, valid endVerse', function() {
    expect(function() {
      song.sing(1000, 20);
    }).toThrow(
      new InvalidParameterException('Invalid verse range'));
  });

  it('throws InvalidParameterException when given invalid input: out of range startVerse and endVerse', function() {
    expect(function() {
      song.sing(2000, 1000);
    }).toThrow(
      new InvalidParameterException('Invalid verse range'));
  });

  it('sings one verse', function() {
    var expected = '8 bottles of beer on the wall, 8 bottles of beer.\nTake one down and pass it around, 7 bottles of beer on the wall.\n';
    expect(song.sing(8, 8)).toEqual(expected);
  });

  it('sings several verses', function() {
    var expected = '8 bottles of beer on the wall, 8 bottles of beer.\nTake one down and pass it around, 7 bottles of beer on the wall.\n\n7 bottles of beer on the wall, 7 bottles of beer.\nTake one down and pass it around, 6 bottles of beer on the wall.\n\n6 bottles of beer on the wall, 6 bottles of beer.\nTake one down and pass it around, 5 bottles of beer on the wall.\n';
    expect(song.sing(8, 6)).toEqual(expected);
  });

  it('sings the rest of the verses', function() {
    var expected = '3 bottles of beer on the wall, 3 bottles of beer.\nTake one down and pass it around, 2 bottles of beer on the wall.\n\n2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n\n1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';
    expect(song.sing(3)).toEqual(expected);
  });
});

describe('validateRange()', function() {
  var beerSong = new BeerSong();

  it('returns true for numbers in range, no endVerse', function() {
    var i = 0;

    for (i = MIN ; i <= MAX ; i++) {
      expect(beerSong.validateRange(i)).toEqual(true);
    }
  });

  it('returns false for negative numbers, no endVerse', function() {
    expect(beerSong.validateRange(-10)).toEqual(false);
  });

  it('returns false for numbers that are too large, no endVerse', function() {
    expect(beerSong.validateRange(1000)).toEqual(false);
  });

  it('returns true for numbers in range, with endVerse', function() {
    var i = 0,
      j = 0;

    for (i = MAX ; i >= MIN ; i--) {
      for (j = i; j >= MIN ; j--) {
        expect(beerSong.validateRange(i, j)).toEqual(true);
      }
    }
  });

  it('returns false when startVerse < endVerse', function() {
    expect(beerSong.validateRange(10, 20)).toEqual(false);
  });

  it('returns false for negative numbers: startVerse', function() {
    expect(beerSong.validateRange(-10, 0)).toEqual(false);
  });

  it('returns false for negative numbers: endVerse', function() {
    expect(beerSong.validateRange(20, -10)).toEqual(false);
  });

  it('returns false for negative numbers: both startVerse and endVerse', function() {
    expect(beerSong.validateRange(-10,-20)).toEqual(false);
  });

  it('returns false for out of range numbers: startVerse', function() {
    expect(beerSong.validateRange(2000, 10)).toEqual(false);
  });

  it('returns false for out of range numbers: startVerse and endVerse', function() {
    expect(beerSong.validateRange(2000, 1000)).toEqual(false);
  });
});

describe('validateVerse()', function() {
  var beerSong = new BeerSong();

  it('returns true for numbers in range', function() {
    var i = 0;

    for (i = MIN ; i <= MAX ; i++) {
      expect(beerSong.validateVerse(i)).toEqual(true);
    }
  });

  it('returns false for negative numbers', function() {
    expect(beerSong.validateVerse(-10)).toEqual(false);
  });

  it('returns false for numbers that are too large', function() {
    expect(beerSong.validateVerse(1000)).toEqual(false);
  });
});
