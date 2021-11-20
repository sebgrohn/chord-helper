import { getChordNotes, transposeChord } from './chords';

describe('getChordNotes', () => {
  it('should return C, E, G for C major chord', () => {
    const noteNames = getChordNotes('C');
    expect(noteNames).toEqual(['C', 'E', 'G']);
  });
});

describe('transposeChord', () => {
  it('should return E major chord for C major transposed a perfect forth', () => {
    const transposedChord = transposeChord('C', 5);
    expect(transposedChord).toEqual('F');
  });
});
