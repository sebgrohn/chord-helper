import { ChordName } from './chords';
import { InstrumentName } from './tunings.guitar';

type StringPositions = (number | null)[];

const chords: Record<
  InstrumentName,
  Partial<Record<ChordName, StringPositions>>
> = {
  guitar: {
    C: [null, 3, 2, 0, 1, 0],
    D: [null, null, 0, 2, 3, 2],
    Dmin: [null, null, 0, 2, 3, 1],
    E: [0, 2, 2, 1, 0, 0],
    Emin: [0, 2, 2, 0, 0, 0],
    // F: [1, 3, 3, 2, 1, 1],
    G: [3, 2, 0, 0, 0, 3],
    A: [null, 0, 2, 2, 2, 0],
    Amin: [null, 0, 2, 2, 1, 0],
    B: [null, 2, 4, 4, 4, 2],
  },
  guitalele: {},
};

export default chords;
