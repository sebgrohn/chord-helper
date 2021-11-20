import { getNotePitch } from './notePitches';

describe('getNotePitch', () => {
  it('should return 440 Hz for A4', () => {
    const pitch = getNotePitch('A4');
    expect(pitch).toBeCloseTo(440);
  });

  it('should return 220 Hz for A3', () => {
    const pitch = getNotePitch('A3');
    expect(pitch).toBeCloseTo(220);
  });

  it('should return 880 Hz for A5', () => {
    const pitch = getNotePitch('A3');
    expect(pitch).toBeCloseTo(220);
  });

  it('should return 261.626 Hz for C4', () => {
    const pitch = getNotePitch('C4');
    expect(pitch).toBeCloseTo(261.626);
  });

  it('should return 369.994 Hz for F#4', () => {
    const pitch = getNotePitch('F#4');
    expect(pitch).toBeCloseTo(369.994);
  });
});
