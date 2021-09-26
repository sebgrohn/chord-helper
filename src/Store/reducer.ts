import type { Reducer } from 'react';
import { StoredState } from '../Hooks/useStoringReducer';
import type { Action } from './actions';
import migrations from './migrations';
import type { State } from './Types/State';

export const initialState: State = {
  version: 2,
  chordSets: [
    {
      name: 'Example: Leaving on a Jet Plane',
      description: "Example chordset for John Denver's Leaving on a Jet Plane",
      selectedChords: ['G', 'C', 'D'],
    },
  ],
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
      return !state.chordSets[0].selectedChords.find((c) => c === action.chord)
        ? {
            ...state,
            chordSets: [
              {
                ...state.chordSets[0],
                selectedChords: [
                  ...state.chordSets[0].selectedChords,
                  action.chord,
                ],
              },
              ...state.chordSets.slice(1),
            ],
          }
        : state;

    case 'removeChord':
      return state.chordSets[0].selectedChords.find((c) => c === action.chord)
        ? {
            ...state,
            chordSets: [
              {
                ...state.chordSets[0],
                selectedChords: [
                  ...state.chordSets[0].selectedChords.filter(
                    (c) => c !== action.chord,
                  ),
                ],
              },
              ...state.chordSets.slice(1),
            ],
          }
        : state;

    default:
      return state;
  }
};

export default reducer;
