import { getAvailableChords } from '../Theory/chords.guitar';
import { getChordsInKey, getSuggestedKeysForChords } from '../Theory/keys';
import type { ChordSet, State } from './Types/State';

export const getChordSets = (state: State) => state.chordSets;

export const getChordSet =
  (chordSetId: number) =>
  (state: State): ChordSet | undefined =>
    getChordSets(state)[chordSetId];

export const getFilteredChords = (chordSetId: number) => {
  const chordSetSelector = getChordSet(chordSetId);

  return (state: State) => {
    const chordSet = chordSetSelector(state);
    if (!chordSet) {
      return undefined;
    }

    const { selectedKey, selectedChords } = chordSet;
    const chordsInKey = selectedKey && getChordsInKey(selectedKey);

    const filteredChords = getAvailableChords('guitar').filter(
      (c) => selectedChords.indexOf(c) < 0,
    );

    return chordsInKey
      ? filteredChords.filter((c) => chordsInKey.includes(c))
      : filteredChords;
  };
};

export const getSuggestedKeys = (chordSetId: number) => {
  const chordSetSelector = getChordSet(chordSetId);

  return (state: State) => {
    const chordSet = chordSetSelector(state);
    if (!chordSet) {
      return undefined;
    }

    return getSuggestedKeysForChords(chordSet.selectedChords)
      .map(({ key }) => key)
      .slice(0, 3);
  };
};
