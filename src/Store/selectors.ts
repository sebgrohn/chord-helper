import chords from '../Theory/chords.guitar';
import type { State } from './Types/State';

export const getChordSets = (state: State) => state.chordSets;

export const getAvailableChords = () => {
  const chordsForInstrument = chords['guitar'] ?? [];
  return chordsForInstrument.map((c) => c.chord);
};
