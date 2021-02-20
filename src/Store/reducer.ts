import type { Reducer } from 'react';
import type { ChordName } from '../Theory/chords';
import { Action } from './actions';

export interface State {
  selectedChord?: ChordName;
}

export const initialState: State = {
  selectedChord: 'D',
};

const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case 'setSelectedChord':
      return {
        ...state,
        selectedChord: action.chord,
      };

    default:
      throw new Error();
  }
};

export default reducer;
