import type { ChordName } from './chords';
import { transposeChord } from './chords';
import type { IntervalPerfectUnison, IntervalWithPerfectOctave } from './notes';
import type { InstrumentName } from './tunings.guitar';

export type ChordType = 'simple' | 'barre';

/**
 * 1 = lowest string, 6 = highest string.
 */
export type StringId = 1 | 2 | 3 | 4 | 5 | 6;

type StringInterval = [
  /** From string (inclusive) */
  StringId,
  /** To string (inclusive) */
  StringId,
];

export type FretId =
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
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19;

type StringPosition = [FretId, StringId | StringInterval];

/**
 * String and fret position (or null for unused), per finger (index -> pinky).
 */
type StringPositions = [
  /** Index finger */
  StringPosition | null,
  /** Middle finger */
  StringPosition | null,
  /** Ring finger */
  StringPosition | null,
  /** Pinky finger */
  StringPosition | null,
];

export interface ChordDefinition {
  chord: ChordName;
  type: ChordType;
  positions: StringPositions;
  mutedStrings: StringId[];
}

const getEBarreShapeDefinition = (
  interval: Exclude<IntervalWithPerfectOctave, IntervalPerfectUnison>,
): ChordDefinition => ({
  chord: transposeChord('E', interval),
  type: 'barre',
  positions: [
    [interval, [1, 6]],
    [(interval + 1) as FretId, 4],
    [(interval + 2) as FretId, 2],
    [(interval + 2) as FretId, 3],
  ],
  mutedStrings: [],
});

const getEMinBarreShapeDefinition = (
  interval: Exclude<IntervalWithPerfectOctave, IntervalPerfectUnison>,
): ChordDefinition => ({
  chord: transposeChord('Emin', interval),
  type: 'barre',
  positions: [
    [interval, [1, 6]],
    null,
    [(interval + 2) as FretId, 2],
    [(interval + 2) as FretId, 3],
  ],
  mutedStrings: [],
});

const getABarreShapeDefinition = (
  interval: Exclude<IntervalWithPerfectOctave, IntervalPerfectUnison>,
): ChordDefinition => ({
  chord: transposeChord('A', interval),
  type: 'barre',
  positions: [
    [interval, [2, 6]],
    [(interval + 2) as FretId, 3],
    [(interval + 2) as FretId, 4],
    [(interval + 2) as FretId, 5],
  ],
  mutedStrings: [1],
});

const getAMinBarreShapeDefinition = (
  interval: Exclude<IntervalWithPerfectOctave, IntervalPerfectUnison>,
): ChordDefinition => ({
  chord: transposeChord('Amin', interval),
  type: 'barre',
  positions: [
    [interval, [2, 6]],
    [(interval + 1) as FretId, 5],
    [(interval + 2) as FretId, 3],
    [(interval + 2) as FretId, 4],
  ],
  mutedStrings: [1],
});

export const chords: Record<InstrumentName, ChordDefinition[]> = {
  guitar: [
    {
      chord: 'C',
      type: 'simple',
      positions: [[1, 5], [2, 3], [3, 2], null],
      mutedStrings: [1],
    },
    // { chord: 'Cmin', type: '', positions: [], mutedStrings: [] },
    {
      chord: 'D',
      type: 'simple',
      positions: [[2, 4], [2, 6], [3, 5], null],
      mutedStrings: [1, 2],
    },
    {
      chord: 'Dmin',
      type: 'simple',
      positions: [[1, 6], [2, 4], [3, 5], null],
      mutedStrings: [1, 2],
    },
    // { chord: 'D#', type: '', positions: [], mutedStrings: [] },
    {
      chord: 'D#min',
      type: 'simple',
      positions: [
        [1, 3],
        [2, 6],
        [3, 4],
        [4, 5],
      ],
      mutedStrings: [1, 2],
    },
    {
      chord: 'E',
      type: 'simple',
      positions: [[1, 4], [2, 2], [2, 3], null],
      mutedStrings: [],
    },
    {
      chord: 'Emin',
      type: 'simple',
      positions: [null, [2, 2], [2, 3], null],
      mutedStrings: [],
    },
    getEBarreShapeDefinition(1), // F
    getEMinBarreShapeDefinition(1), // Fmin
    getEBarreShapeDefinition(2), // F#
    getEMinBarreShapeDefinition(2), // F#min
    {
      chord: 'G',
      type: 'simple',
      positions: [[2, 2], [3, 1], [3, 6], null],
      mutedStrings: [],
    },
    getEMinBarreShapeDefinition(3), // Gmin
    getEBarreShapeDefinition(4), // G#
    getEMinBarreShapeDefinition(4), // G#min
    {
      chord: 'A',
      type: 'simple',
      positions: [[2, 3], [2, 4], [2, 5], null],
      mutedStrings: [1],
    },
    {
      chord: 'Amin',
      type: 'simple',
      positions: [[1, 5], [2, 3], [2, 4], null],
      mutedStrings: [1],
    },
    getABarreShapeDefinition(1), // A#
    getAMinBarreShapeDefinition(1), // A#min
    getABarreShapeDefinition(2), // B
    getAMinBarreShapeDefinition(2), // Bmin
  ],
  guitalele: [],
};

export const getAvailableChords = (instrumentName: InstrumentName) =>
  chords[instrumentName].map((c) => c.chord);

export const getStringPositionsParts = (stringPositions: StringPositions) =>
  stringPositions
    .map((pos, fingerIndex) => ({ pos, fingerIndex }))
    .filter(
      (x): x is { pos: StringPosition; fingerIndex: number } => x.pos != null,
    )
    .map(({ pos, fingerIndex }) => {
      const [fretId, stringIdOrInterval] = pos;
      const [startStringId, endStringId] = Array.isArray(stringIdOrInterval)
        ? stringIdOrInterval
        : [stringIdOrInterval, stringIdOrInterval];

      return {
        fretId,
        startStringId,
        endStringId,
        fingerIndex,
      };
    });

export default chords;
