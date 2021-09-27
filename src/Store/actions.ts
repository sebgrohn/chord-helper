import type { ChordName } from '../Theory/chords';

export interface AddChordAction {
  type: 'addChord';
  chordSetIndex: number;
  chord: ChordName;
}

export const addChord = (
  chordSetIndex: number,
  chord: ChordName,
): AddChordAction => ({
  type: 'addChord',
  chordSetIndex,
  chord,
});

export interface RemoveChordAction {
  type: 'removeChord';
  chordSetIndex: number;
  chord: ChordName;
}

export const removeChord = (
  chordSetIndex: number,
  chord: ChordName,
): RemoveChordAction => ({
  type: 'removeChord',
  chordSetIndex,
  chord,
});

export type Action = AddChordAction | RemoveChordAction;
