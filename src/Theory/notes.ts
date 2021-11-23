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

export type Octave = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type Note = `${NoteName}${Octave}`;

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
export type IntervalPerfectUnison = 0;
export type IntervalMinorSecond = 1;
export type IntervalMajorSecond = 2;
export type IntervalMinorThird = 3;
export type IntervalMajorThird = 4;
export type IntervalPerfectFourth = 5;
export type IntervalAugmentedFourth = 6;
export type IntervalDiminishedFifth = 6;
export type IntervalPerfectFifth = 7;
export type IntervalMinorSixth = 8;
export type IntervalMajorSixth = 9;
export type IntervalMinorSeventh = 10;
export type IntervalMajorSeventh = 11;
export type IntervalPerfectOctave = 12;

export type Interval =
  | IntervalPerfectUnison
  | IntervalMinorSecond
  | IntervalMajorSecond
  | IntervalMinorThird
  | IntervalMajorThird
  | IntervalPerfectFourth
  | IntervalAugmentedFourth
  | IntervalDiminishedFifth
  | IntervalPerfectFifth
  | IntervalMinorSixth
  | IntervalMajorSixth
  | IntervalMinorSeventh
  | IntervalMajorSeventh;

export type IntervalWithPerfectOctave = Interval | IntervalPerfectOctave;

const notePattern = /^\s*([A-G]#?)(\d)\s*$/;

export const getNoteParts = (note: Note): [NoteName, Octave] => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, noteName, octave] = notePattern.exec(note) ?? [];
  return [noteName as NoteName, Number.parseInt(octave) as Octave];
};

const getNoteFromParts = (noteName: NoteName, octave: Octave): Note =>
  `${noteName}${octave}` as Note;

export const transposeNoteName = (
  noteName: NoteName,
  interval: IntervalWithPerfectOctave,
) => {
  const index = noteNames.indexOf(noteName);
  const transposedIndex = (index + interval) % 12;
  return noteNames[transposedIndex];
};

export const transposeNote = (note: Note, semitoneDistance: number) => {
  const [noteName, octave] = getNoteParts(note);
  const transposedNoteName = transposeNoteName(
    noteName,
    (semitoneDistance % 12) as Interval,
  );
  const octaveDistance =
    Math.sign(semitoneDistance) * Math.floor(Math.abs(semitoneDistance) / 12);
  return getNoteFromParts(
    transposedNoteName,
    (octave + octaveDistance) as Octave,
  );
};
