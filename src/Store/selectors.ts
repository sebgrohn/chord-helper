import { ChordName } from '../Theory/chords';
import chords from '../Theory/chords.guitar';
import type { State } from './reducer';

export const getSelectedChords = (state: State) => state.selectedChords;

export const getAvailableChords = (state: State) => {
  const selectedChords = getSelectedChords(state);
  const chordsForInstrument = Object.keys(chords['guitar']) as ChordName[];
  return chordsForInstrument.filter((c) => selectedChords.indexOf(c) < 0);
};
