import chords from '../Theory/chords.guitar';
import type { ChordSet, State } from './Types/State';

export const getChordSets = (state: State) => state.chordSets;

export const getChordSet =
  (chordSetId: number) =>
  (state: State): ChordSet | undefined =>
    getChordSets(state)[chordSetId];

export const getAvailableChords = () => {
  const chordsForInstrument = chords['guitar'] ?? [];
  return chordsForInstrument.map((c) => c.chord);
};
