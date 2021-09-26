import chords from '../Theory/chords.guitar';
import type { State } from './Types/State';

export const getSelectedChords = (state: State) => state.selectedChords;

export const getAvailableChords = (state: State) => {
  const selectedChords = getSelectedChords(state);
  const chordsForInstrument = chords['guitar'] ?? [];
  return chordsForInstrument
    .map((c) => c.chord)
    .filter((c) => selectedChords.indexOf(c) < 0);
};
