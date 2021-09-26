import { Footer, Grommet, Header, Heading, Main, Text } from 'grommet';
import React, { useCallback, useState } from 'react';
import './App.css';
import ChordCardCollection from './Components/ChordCardCollection';
import ChordSelector from './Components/ChordSelector';
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

  const selectedChords = selectors.getSelectedChords(state);
  const availableChords = selectors.getAvailableChords(state);

  // Start in edit mode if no chords selected
  const [isEditing, setIsEditing] = useState(selectedChords.length === 0);

  const handleAddChord = useCallback(
    (chordToAdd) => dispatch(actions.addChord(chordToAdd)),
    [dispatch],
  );

  const handleRemoveChord = useCallback(
    (chordToRemove) => dispatch(actions.removeChord(chordToRemove)),
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
        <ChordSelector
          chords={availableChords}
          isEditing={isEditing}
          onAddChord={handleAddChord}
          onIsEditingChange={setIsEditing}
        />
        <ChordCardCollection
          chords={selectedChords}
          isEditing={isEditing}
          onRemoveChord={handleRemoveChord}
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
