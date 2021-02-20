import type { ChordName } from '../Theory/chords';

export interface AddChordAction {
  type: 'addChord';
  chord: ChordName;
}

export const addChord = (chord: ChordName): AddChordAction => ({
  type: 'addChord',
  chord,
});

export interface RemoveChordAction {
  type: 'removeChord';
  chord: ChordName;
}

export const removeChord = (chord: ChordName): RemoveChordAction => ({
  type: 'removeChord',
  chord,
});

export type Action = AddChordAction | RemoveChordAction;
