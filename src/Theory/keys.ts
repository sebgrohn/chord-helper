import type { ChordDefinition, ChordModifier, ChordName } from './chords';
import { chordDefinitions, getChordNameFromParts } from './chords';
import type { Interval, IntervalWithPerfectOctave, NoteName } from './notes';
import { noteNames, transposeNoteName } from './notes';

export type KeyModifier = '' | 'min'; // ...more

export type KeyName = `${NoteName}${KeyModifier}`;

export type KeyDefinition = Interval[];

const keyDefinitions: Record<KeyModifier, KeyDefinition> = {
  '': [0, 2, 4, 5, 7, 9, 11], // major
  min: [0, 2, 3, 5, 7, 8, 10], // minor
};

const keyNamePattern = /^\s*([A-G]#?)(|min)\s*$/;

export const getKeyNameParts = (keyName: KeyName): [NoteName, KeyModifier] => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, rootNoteName, keyModifier] = keyNamePattern.exec(keyName) ?? [];
  return [rootNoteName as NoteName, keyModifier as KeyModifier];
};

const getKeyNameFromParts = (
  rootNoteName: NoteName,
  keyModifier: KeyModifier,
): KeyName => `${rootNoteName}${keyModifier}` as KeyName;

export const getAllKeys = (): KeyName[] =>
  noteNames.flatMap((n) =>
    (Object.keys(keyDefinitions) as KeyModifier[]).map((k) =>
      getKeyNameFromParts(n, k),
    ),
  );

export const getKeyNotes = (keyName: KeyName): NoteName[] => {
  const [rootNoteName, keyModifier] = getKeyNameParts(keyName);
  const chordDefinition = keyDefinitions[keyModifier];
  return chordDefinition.map((x) => transposeNoteName(rootNoteName, x));
};

export const transposeKey = (
  keyName: KeyName,
  interval: IntervalWithPerfectOctave,
): KeyName => {
  const [rootNoteName, keyModifier] = getKeyNameParts(keyName);
  const transposedNoteName = transposeNoteName(rootNoteName, interval);
  return getKeyNameFromParts(transposedNoteName, keyModifier);
};

export const getChordsInKey = (keyName: KeyName): ChordName[] => {
  const [rootNoteName, keyModifier] = getKeyNameParts(keyName);

  const keyDefinition = keyDefinitions[keyModifier];

  return keyDefinition.map((baseInterval) => {
    const transposedDefinition = keyDefinition.map(
      (i) => ((i - baseInterval + 12) % 12) as Interval,
    );

    const matchingChordModifiers = (
      Object.entries(chordDefinitions) as [ChordModifier, ChordDefinition][]
    ).filter(
      ([_, d]) =>
        d.every((i) => transposedDefinition.includes(i)) && d.length === 3,
    );
    if (matchingChordModifiers.length !== 1) {
      console.log(transposedDefinition, matchingChordModifiers);
    }

    const [matchingChordModifier] = matchingChordModifiers[0] ?? [];
    return getChordNameFromParts(
      transposeNoteName(rootNoteName, baseInterval),
      matchingChordModifier!,
    );
  });
};

export const getSuggestedKeysForChords = (
  chords: ChordName[],
): { key: KeyName; chordCount: number; weight: number }[] =>
  getAllKeys()
    .map((key) => {
      const chordsInKey = getChordsInKey(key);

      const chordCount = chords.filter((c) => chordsInKey.includes(c)).length;

      const weight = chords
        .map((c) => chordsInKey.indexOf(c))
        .reduce(
          (acc, pos) => (pos !== -1 ? acc + chordsInKey.length - pos : acc),
          0,
        );

      return { key, chordCount, weight };
    })
    .filter(({ weight }) => weight > 0)
    .sort((a, b) => b.weight - a.weight);
