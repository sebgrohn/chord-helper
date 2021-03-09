import {
  Dispatch,
  Reducer,
  ReducerAction,
  ReducerState,
  useMemo,
  useReducer,
} from 'react';

const createStoringReducer = <S, A>(
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
          console.log('Written to local storage', newState);
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

const readStoredState = <S, _>(key: string, initialState: S): S | undefined => {
  try {
    const rawState = localStorage.getItem(key);
    const readState = rawState && JSON.parse(rawState);
    console.log('Read from local storage', readState);
    return readState;
  } catch (error) {
    // TODO
    console.error("Couldn't read from local storage.", error);
  }
};

const useStoringReducer = <R extends Reducer<any, any>>(
  key: string,
  reducer: R,
  initialState: ReducerState<R>,
  initializer?: undefined,
): [ReducerState<R>, Dispatch<ReducerAction<R>>] => {
  const storingReducer = useMemo(() => createStoringReducer(key, reducer), [
    key,
    reducer,
  ]);
  const readState = useMemo(() => readStoredState(key, initialState), [
    key,
    initialState,
  ]);

  return useReducer(
    storingReducer,
    readState ?? initialState,
    readState ? undefined : initializer,
  );
};

export default useStoringReducer;
