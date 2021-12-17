import type { Note } from './notes';
import { getNoteParts, noteNames } from './notes';

export const getSemitoneDistance = (note1: Note, note2: Note): number => {
  const [noteName1, octave1] = getNoteParts(note1);
  const [noteName2, octave2] = getNoteParts(note2);
  return (
    12 * (octave2 - octave1) +
    (noteNames.indexOf(noteName2) - noteNames.indexOf(noteName1))
  );
};

// https://en.wikipedia.org/wiki/A440_(pitch_standard)
const standardPitch = {
  note: 'A4' as Note,
  frequency: 440, // Hz
  semiToneRatio: Math.pow(2, 1 / 12),
};

export const getNotePitch = (note: Note): number => {
  const semitoneDistanceFromStandard = getSemitoneDistance(
    standardPitch.note,
    note,
  );
  return (
    standardPitch.frequency *
    Math.pow(standardPitch.semiToneRatio, semitoneDistanceFromStandard)
  );
};
