import { getChordNotes } from './chords';

describe('getChordNotes', () => {
  it('should return C, E, G for C major chord', () => {
    const noteNames = getChordNotes('C');
    expect(noteNames).toEqual(['C', 'E', 'G']);
  });
});
