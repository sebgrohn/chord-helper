import type { Reducer } from 'react';
import type { ChordName } from '../Theory/chords';
import { Action } from './actions';

export interface State {
  selectedChords: ChordName[];
}

export const initialState: State = {
  selectedChords: ['D'],
};

const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case 'addChord':
      return !state.selectedChords.find((c) => c === action.chord)
        ? {
            ...state,
            selectedChords: [...state.selectedChords, action.chord],
          }
        : state;

    case 'removeChord':
      return state.selectedChords.find((c) => c === action.chord)
        ? {
            ...state,
            selectedChords: [
              ...state.selectedChords.filter((c) => c !== action.chord),
            ],
          }
        : state;

    default:
      throw new Error();
  }
};

export default reducer;
