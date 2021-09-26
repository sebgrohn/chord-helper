import type { StoredState } from '../Hooks/useStoringReducer';
import type { StateVersion0, StateVersion1 } from './Types/State';

const migrateFrom0To1 = (state: StateVersion0): StateVersion1 => ({
  version: 1,
  ...state,
});

const migrations: StoredState = [migrateFrom0To1];

export default migrations;
