import {
  Dispatch,
  Reducer,
  ReducerAction,
  ReducerState,
  useMemo,
  useReducer,
} from 'react';

export interface StoredState extends Record<any, any> {
  version?: number;
}

const createStoringReducer = <S extends StoredState, A>(
  key: string,
  reducer: Reducer<S, A>,
): Reducer<S, A> => {
  let writeTimeoutRef: number | undefined;

  const storingReducer: Reducer<S, A> = (state, action) => {
    const newState = reducer(state, action);

    if (newState !== state) {
      window.clearTimeout(writeTimeoutRef);

      writeTimeoutRef = window.setTimeout(() => {
        try {
          localStorage.setItem(key, JSON.stringify(newState));
          console.log(
            `Written to local storage (version: ${newState.version})`,
            newState,
          );
        } catch (error) {
          // TODO
          console.error("Couldn't write to local storage.", error);
        }
      }, 100);
    }

    return newState;
  };

  return storingReducer;
};

const readStoredState = <S extends StoredState>(key: string): S | undefined => {
  try {
    const rawState = localStorage.getItem(key);
    const readState = rawState && JSON.parse(rawState);
    console.log(
      `Read from local storage (version: ${readState?.version})`,
      readState,
    );
    return readState;
  } catch (error) {
    // TODO
    console.error("Couldn't read from local storage.", error);
  }
};

const useStoringReducer = <R extends Reducer<any, any>, S extends StoredState>(
  key: string,
  reducer: R,
  migrateState: (readState: StoredState) => S,
  initialState: S,
  initializer?: undefined,
): [ReducerState<R>, Dispatch<ReducerAction<R>>] => {
  const storingReducer = useMemo(
    () => createStoringReducer(key, reducer),
    [key, reducer],
  );
  const readState = useMemo(() => readStoredState(key), [key]);

  const migratedState = useMemo(
    () => migrateState(readState ?? initialState),
    [migrateState, readState, initialState],
  );

  return useReducer(
    storingReducer,
    migratedState,
    readState ? undefined : initializer,
  );
};

export default useStoringReducer;
