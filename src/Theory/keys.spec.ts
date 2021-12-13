import {
  getChordsInKey,
  getKeyNotes,
  getSuggestedKeysForChords,
  transposeKey,
} from './keys';

describe('getKeyNotes', () => {
  it('should return C, D, E, F, G, A, B for C major chord', () => {
    const noteNames = getKeyNotes('C');
    expect(noteNames).toEqual(['C', 'D', 'E', 'F', 'G', 'A', 'B']);
  });
});

describe('transposeKey', () => {
  it('should return E major key for C major transposed a perfect forth', () => {
    const transposedKey = transposeKey('C', 5);
    expect(transposedKey).toEqual('F');
  });
});

describe('getChordsInKey', () => {
  it('should return C, Dmin, Emin, F, G, Amin, Bdim for C major key', () => {
    const chords = getChordsInKey('C');
    expect(chords).toEqual(['C', 'Dmin', 'Emin', 'F', 'G', 'Amin', 'Bdim']);
  });

  it('should return Cmin, Ddim, D#, Fmin, Gmin, G#, A# for C minor key', () => {
    const chords = getChordsInKey('Cmin');
    expect(chords).toEqual(['Cmin', 'Ddim', 'D#', 'Fmin', 'Gmin', 'G#', 'A#']);
  });

  it('should return Amin, Bdim, C, Dmin, Emin, F, G for A minor key', () => {
    const chords = getChordsInKey('Amin');
    expect(chords).toEqual(['Amin', 'Bdim', 'C', 'Dmin', 'Emin', 'F', 'G']);
  });
});

describe('getSuggestedKeysForChords', () => {
  it('should suggest C major, A minor, ... keys for chords Amin, Bdim, C, Dmin, Emin, F, G', () => {
    const suggestedKeys = getSuggestedKeysForChords([
      'Amin',
      'Dmin',
      'C',
      'G',
      'F',
      'Emin',
    ]);
    expect(suggestedKeys.slice(0, 6)).toMatchInlineSnapshot(`
        Array [
          Object {
            "chordCount": 6,
            "key": "C",
            "weight": 27,
          },
          Object {
            "chordCount": 6,
            "key": "Amin",
            "weight": 22,
          },
          Object {
            "chordCount": 4,
            "key": "G",
            "weight": 19,
          },
          Object {
            "chordCount": 4,
            "key": "Emin",
            "weight": 18,
          },
          Object {
            "chordCount": 4,
            "key": "F",
            "weight": 17,
          },
          Object {
            "chordCount": 4,
            "key": "Dmin",
            "weight": 16,
          },
        ]
      `);
  });
});
