import type { ChordName } from './chords';
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

const chords: Record<InstrumentName, ChordDefinition[]> = {
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
    {
      chord: 'F',
      type: 'barre',
      positions: [
        [1, [1, 6]],
        [2, 4],
        [3, 2],
        [3, 3],
      ],
      mutedStrings: [],
    },
    // { chord: 'Fmin', type: '', positions: [], mutedStrings: [] },
    {
      chord: 'G',
      type: 'simple',
      positions: [[2, 2], [3, 1], [3, 6], null],
      mutedStrings: [],
    },
    // { chord: 'Gmin', type: '', positions: [], mutedStrings: [] },
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
    {
      chord: 'B',
      type: 'barre',
      positions: [
        [2, [2, 6]],
        [4, 3],
        [4, 4],
        [4, 5],
      ],
      mutedStrings: [1],
    },
    // { chord: 'Bmin', type: '', positions: [], mutedStrings: [] },
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
