import type { StoredState } from '../Hooks/useStoringReducer';
import type {
  StateVersion0,
  StateVersion1,
  StateVersion2,
} from './Types/State';

const migrateFrom0To1 = (state: StateVersion0): StateVersion1 => ({
  version: 1,
  ...state,
});

const migrateFrom1To2 = ({
  version,
  ...rest
}: StateVersion1): StateVersion2 => ({
  version: 2,
  chordSets: [{ name: '', description: '', ...rest }],
});

const migrations: StoredState = [migrateFrom0To1, migrateFrom1To2];

export default migrations;
