import { Note } from './notes';

export type InstrumentName = 'guitar' | 'guitalele';

export type Tuning = Note[];

const tunings: Record<InstrumentName, Tuning> = {
  guitar: ['E2', 'A2', 'D3', 'G3', 'B3', 'E4'],
  guitalele: ['A2', 'D3', 'G3', 'C4', 'E4', 'A4'],
};

export default tunings;
