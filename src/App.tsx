import { Footer, Grommet, Header, Heading, Main, Text } from 'grommet';
import React, { useCallback } from 'react';
import './App.css';
import ChordSetCollection from './Components/ChordSetCollection';
import useStoringReducer from './Hooks/useStoringReducer';
import * as actions from './Store/actions';
import reducer, { initialState, migrateState } from './Store/reducer';
import * as selectors from './Store/selectors';
import theme from './theme';

const applicationStateStorageKey = 'applicationState';

function App() {
  const [state, dispatch] = useStoringReducer(
    applicationStateStorageKey,
    reducer,
    migrateState,
    initialState,
  );

  const chordSets = selectors.getChordSets(state);
  const availableChords = selectors.getAvailableChords();

  const handleSetChordSetName = useCallback(
    (chordSetIndex, newName) =>
      dispatch(actions.setChordSetName(chordSetIndex, newName)),
    [dispatch],
  );

  const handleSetChordSetDescription = useCallback(
    (chordSetIndex, newDescription) =>
      dispatch(actions.setChordSetDescription(chordSetIndex, newDescription)),
    [dispatch],
  );

  const handleAddChordToSet = useCallback(
    (chordSetIndex, chordToAdd) =>
      dispatch(actions.addChordToSet(chordSetIndex, chordToAdd)),
    [dispatch],
  );

  const handleRemoveChordFromSet = useCallback(
    (chordSetIndex, chordToRemove) =>
      dispatch(actions.removeChordFromSet(chordSetIndex, chordToRemove)),
    [dispatch],
  );

  return (
    <Grommet full theme={theme} themeMode="dark">
      <Header
        pad={{ vertical: 'medium', horizontal: 'large' }}
        background="brand"
      >
        <Heading size="small" margin="none">
          Chord Helper
        </Heading>
      </Header>
      <Main pad="large" gap="medium">
        <ChordSetCollection
          chordSets={chordSets}
          availableChords={availableChords}
          onSetName={handleSetChordSetName}
          onSetDescription={handleSetChordSetDescription}
          onAddChord={handleAddChordToSet}
          onRemoveChord={handleRemoveChordFromSet}
        />
      </Main>
      <Footer
        pad={{ vertical: 'small', horizontal: 'large' }}
        background="black"
        justify="center"
      >
        <Text color="text-xweak">Helping you with chords since 2021.</Text>
      </Footer>
    </Grommet>
  );
}

export default App;
