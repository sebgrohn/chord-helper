import type { Reducer } from 'react';
import { StoredState } from '../Hooks/useStoringReducer';
import type { Action } from './actions';
import migrations from './migrations';
import type { ChordSet, State } from './Types/State';

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
    case 'addChordSet':
      return {
        ...state,
        chordSets: [
          ...state.chordSets,
          {
            name: '',
            description: '',
            selectedChords: [],
          },
        ],
      };

    case 'removeChordSet': {
      const { chordSetToRemoveIndex } = action;
      const { chordSets } = state;
      return chordSets[chordSetToRemoveIndex]
        ? {
            ...state,
            chordSets: chordSets.filter((_, i) => i !== chordSetToRemoveIndex),
          }
        : state;
    }

    case 'setChordSetName':
    case 'setChordSetDescription':
    case 'setChordSetKey':
    case 'addChordToSet':
    case 'moveChordInSet':
    case 'removeChordFromSet': {
      const { chordSetIndex } = action;
      const { chordSets } = state;
      const newChordSet = chordSetReducer(
        state.chordSets[chordSetIndex],
        action,
      );
      return chordSets[chordSetIndex] &&
        newChordSet !== chordSets[chordSetIndex]
        ? {
            ...state,
            chordSets: chordSets.map((chordSet, i) =>
              i === chordSetIndex ? newChordSet : chordSet,
            ),
          }
        : state;
    }

    default:
      return state;
  }
};

const chordSetReducer: Reducer<ChordSet, Action> = (state, action) => {
  switch (action.type) {
    case 'setChordSetName':
      return {
        ...state,
        name: action.newName,
      };

    case 'setChordSetDescription':
      return {
        ...state,
        description: action.newDescription,
      };

    case 'setChordSetKey':
      return {
        ...state,
        selectedKey: action.newKey,
      };

    case 'addChordToSet': {
      const { chordToAdd } = action;
      const { selectedChords } = state;
      return !selectedChords.find((c) => c === chordToAdd)
        ? {
            ...state,
            selectedChords: [...selectedChords, chordToAdd],
          }
        : state;
    }

    case 'moveChordInSet': {
      const { chordToMoveIndex, targetChordIndex } = action;
      const { selectedChords } = state;
      if (
        Math.min(chordToMoveIndex, targetChordIndex) < 0 ||
        Math.max(chordToMoveIndex, targetChordIndex) >= selectedChords.length
      ) {
        return state;
      }

      const newSelectedChords = [...selectedChords];
      const [chordToMove] = newSelectedChords.splice(chordToMoveIndex, 1);
      newSelectedChords.splice(targetChordIndex, 0, chordToMove);

      return {
        ...state,
        selectedChords: newSelectedChords,
      };
    }

    case 'removeChordFromSet': {
      const { chordToRemove } = action;
      const { selectedChords } = state;
      return selectedChords.find((c) => c === chordToRemove)
        ? {
            ...state,
            selectedChords: selectedChords.filter((c) => c !== chordToRemove),
          }
        : state;
    }

    default:
      return state;
  }
};

export default reducer;
