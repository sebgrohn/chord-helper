import { ChordName } from './chords';
import { InstrumentName } from './tunings.guitar';

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

type FretId =
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

/**
 * String and fret position (or null for unused), per finger (index -> pinky).
 */
type StringPositions = [
  [StringId | StringInterval, FretId] | null,
  [StringId | StringInterval, FretId] | null,
  [StringId | StringInterval, FretId] | null,
  [StringId | StringInterval, FretId] | null,
];

interface ChordDefinition {
  chord: ChordName;
  positions: StringPositions;
  mutedStrings: StringId[];
}

const chords: Partial<Record<InstrumentName, ChordDefinition[]>> = {
  guitar: [
    {
      chord: 'C',
      positions: [[5, 1], [3, 2], [2, 3], null],
      mutedStrings: [1],
    },
    // { chord: 'Cmin', positions: [], mutedStrings: [] },
    {
      chord: 'D',
      positions: [[4, 2], [6, 2], [5, 3], null],
      mutedStrings: [1, 2],
    },
    {
      chord: 'Dmin',
      positions: [[6, 1], [4, 2], [5, 3], null],
      mutedStrings: [1, 2],
    },
    {
      chord: 'E',
      positions: [[4, 1], [2, 2], [3, 2], null],
      mutedStrings: [],
    },
    {
      chord: 'Emin',
      positions: [null, [2, 2], [3, 2], null],
      mutedStrings: [],
    },
    {
      chord: 'F',
      positions: [
        [[1, 6], 1],
        [4, 2],
        [2, 3],
        [3, 3],
      ],
      mutedStrings: [],
    },
    // { chord: 'Fmin', positions: [], mutedStrings: [] },
    {
      chord: 'G',
      positions: [[2, 2], [1, 3], [6, 3], null],
      mutedStrings: [],
    },
    // { chord: 'Gmin', positions: [], mutedStrings: [] },
    {
      chord: 'A',
      positions: [[3, 2], [4, 2], [5, 2], null],
      mutedStrings: [1],
    },
    {
      chord: 'Amin',
      positions: [[5, 1], [3, 2], [4, 2], null],
      mutedStrings: [1],
    },
    {
      chord: 'B',
      positions: [
        [[2, 6], 2],
        [3, 4],
        [4, 4],
        [5, 4],
      ],
      mutedStrings: [1],
    },
    // { chord: 'Bmin', positions: [], mutedStrings: [] },
  ],
};

export default chords;
