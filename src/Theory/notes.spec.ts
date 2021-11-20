import { transposeNoteName } from './notes';

describe('transposeNote', () => {
  it('should return F for F perfect unison interval', () => {
    const note = transposeNoteName('F', 0);
    expect(note).toBe('F');
  });

  it('should return F for F perfect octave interval', () => {
    const note = transposeNoteName('F', 12);
    expect(note).toBe('F');
  });

  it('should return A for F major third interval', () => {
    const note = transposeNoteName('F', 4);
    expect(note).toBe('A');
  });

  it('should return D# for G# perfect fifth interval', () => {
    const note = transposeNoteName('G#', 7);
    expect(note).toBe('D#');
  });
});
