export type NoteName =
  | 'C'
  | 'C#'
  | 'D'
  | 'D#'
  | 'E'
  | 'F'
  | 'F#'
  | 'G'
  | 'G#'
  | 'A'
  | 'A#'
  | 'B';

export type OctaveNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type Note = `${NoteName}${OctaveNumber}`;

export const noteNames: NoteName[] = [
  'C',
  'C#',
  'D',
  'D#',
  'E',
  'F',
  'F#',
  'G',
  'G#',
  'A',
  'A#',
  'B',
];

// https://en.wikipedia.org/wiki/Interval_(music)#Main_intervals
export const intervalNames: Record<number, string> = {
  0: 'perfect unison',
  1: 'minor second',
  2: 'major second',
  3: 'minor third',
  4: 'major third',
  5: 'perfect fourth',
  6: 'augmented fourth/diminished fifth',
  7: 'perfect fifth',
  8: 'minor sixth',
  9: 'major sixth',
  10: 'minor seventh',
  11: 'major seventh',
  12: 'perfect octave',
};

const notePattern = /^\s*([A-G]#?)(\d)\s*$/;

export const getNoteParts = (note: Note): [NoteName, OctaveNumber] => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, noteName, octave] = notePattern.exec(note) ?? [];
  return [noteName as NoteName, Number.parseInt(octave) as OctaveNumber];
};

const getNoteFromParts = (noteName: NoteName, octave: OctaveNumber): Note =>
  `${noteName}${octave}` as Note;

export const transposeNoteName = (
  noteName: NoteName,
  semitoneDistance: number,
) => {
  const index = noteNames.indexOf(noteName);
  const transposedIndex = (index + semitoneDistance) % 12;
  return noteNames[transposedIndex];
};

export const transposeNote = (note: Note, semitoneDistance: number) => {
  const [noteName, octave] = getNoteParts(note);
  const transposedNoteName = transposeNoteName(noteName, semitoneDistance);
  const octaveDistance =
    Math.sign(semitoneDistance) * Math.floor(Math.abs(semitoneDistance) / 12);
  return getNoteFromParts(
    transposedNoteName,
    (octave + octaveDistance) as OctaveNumber,
  );
};
