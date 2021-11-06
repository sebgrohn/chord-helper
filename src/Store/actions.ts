import type { ChordName } from '../Theory/chords';

export interface SetChordSetNameAction {
  type: 'setChordSetName';
  chordSetIndex: number;
  newName: string;
}

export const setChordSetName = (
  chordSetIndex: number,
  newName: string,
): SetChordSetNameAction => ({
  type: 'setChordSetName',
  chordSetIndex,
  newName,
});

export interface SetChordSetDescriptionAction {
  type: 'setChordSetDescription';
  chordSetIndex: number;
  newDescription: string;
}

export const setChordSetDescription = (
  chordSetIndex: number,
  newDescription: string,
): SetChordSetDescriptionAction => ({
  type: 'setChordSetDescription',
  chordSetIndex,
  newDescription,
});

export interface AddChordToSetAction {
  type: 'addChordToSet';
  chordSetIndex: number;
  chordToAdd: ChordName;
}

export const addChordToSet = (
  chordSetIndex: number,
  chordToAdd: ChordName,
): AddChordToSetAction => ({
  type: 'addChordToSet',
  chordSetIndex,
  chordToAdd,
});

export interface RemoveChordFromSetAction {
  type: 'removeChordFromSet';
  chordSetIndex: number;
  chordToRemove: ChordName;
}

export const removeChordFromSet = (
  chordSetIndex: number,
  chordToRemove: ChordName,
): RemoveChordFromSetAction => ({
  type: 'removeChordFromSet',
  chordSetIndex,
  chordToRemove,
});

export type Action =
  | SetChordSetNameAction
  | SetChordSetDescriptionAction
  | AddChordToSetAction
  | RemoveChordFromSetAction;
