import { getChordsInKey, getKeyNotes, transposeKey } from './keys';

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
