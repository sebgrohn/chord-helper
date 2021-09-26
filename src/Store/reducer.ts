import type { Reducer } from 'react';
import { StoredState } from '../Hooks/useStoringReducer';
import type { Action } from './actions';
import migrations from './migrations';
import type { State } from './Types/State';

export const initialState: State = {
  version: 1,
  selectedChords: ['G', 'C', 'D'],
};

export const migrateState = (state: StoredState): State => {
  const { version } = state;

  for (let i = version ?? 0; i < initialState.version; i++) {
    const migration = migrations[i];
    state = migration(state);
    console.log(`Migrated from version ${i} → ${i + 1}`, state);
  }

  return state as State;
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
      return state;
  }
};

export default reducer;
