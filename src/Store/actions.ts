import type { ChordName } from '../Theory/chords';

export interface SetSelectedChordAction {
  type: 'setSelectedChord';
  chord: ChordName;
}

export const setSelectedChord = (chord: ChordName): SetSelectedChordAction => ({
  type: 'setSelectedChord',
  chord,
});

export type Action = SetSelectedChordAction;
