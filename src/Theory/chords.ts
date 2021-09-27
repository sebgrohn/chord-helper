import { NoteName, transposeNoteName } from './notes';

export type ChordModifier =
  | ''
  | 'maj6'
  | 'dom7'
  | 'maj7'
  | 'aug'
  | 'aug7'
  | 'min'
  | 'min6'
  | 'min7'; // ...more

export type ChordName = `${NoteName}${ChordModifier}`;

export type ChordDefinition = (
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
)[];

// https://en.wikipedia.org/wiki/Chord_(music)#Examples
const chordDefinitions: Record<ChordModifier, ChordDefinition> = {
  '': [0, 4, 7], // major
  maj6: [0, 4, 7, 9], // major 6th
  dom7: [0, 4, 7, 10], // dominant 7th
  maj7: [0, 4, 7, 11], // major 7th

  aug: [0, 4, 8], // augmented
  aug7: [0, 4, 8, 10], //augmented 7th

  min: [0, 3, 7], // minor
  min6: [0, 3, 7, 9], // minor 6th
  min7: [0, 3, 7, 10], // minor 7th
};

const chordNamePattern =
  /^\s*([A-G]#?)(|maj6|dom7|maj7|aug|aug7|min|min6|min7)\s*$/;

const getChordNameParts = (chordName: ChordName): [NoteName, ChordModifier] => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, rootNoteName, chordModifier] =
    chordNamePattern.exec(chordName) ?? [];
  return [rootNoteName as NoteName, chordModifier as ChordModifier];
};

const getChordNameFromParts = (
  rootNoteName: NoteName,
  chordModifier: ChordModifier,
): ChordName => `${rootNoteName}${chordModifier}` as ChordName;

export const isValidChordName = (
  chordNameString: string,
): chordNameString is ChordName => chordNamePattern.test(chordNameString);

export const getChordNotes = (chordName: ChordName): NoteName[] => {
  const [rootNoteName, chordModifier] = getChordNameParts(chordName);
  const chordDefinition = chordDefinitions[chordModifier];
  return chordDefinition.map((x) => transposeNoteName(rootNoteName, x));
};

export const transposeChord = (
  chordName: ChordName,
  semitoneDistance: number,
): ChordName => {
  const [rootNoteName, chordModifier] = getChordNameParts(chordName);
  const transposedNoteName = transposeNoteName(rootNoteName, semitoneDistance);
  return getChordNameFromParts(transposedNoteName, chordModifier);
};
