import { Footer, Grommet, Header, Heading, Main, Text } from 'grommet';
import React, { useCallback } from 'react';
import './App.css';
import ChordCardCollection from './Components/ChordCardCollection';
import ChordSelector from './Components/ChordSelector';
import useStoringReducer from './Hooks/useStoringReducer';
import * as actions from './Store/actions';
import reducer, { initialState } from './Store/reducer';
import * as selectors from './Store/selectors';
import theme from './theme';

const applicationStateStorageKey = 'applicationState';

function App() {
  const [state, dispatch] = useStoringReducer(
    applicationStateStorageKey,
    reducer,
    initialState,
  );

  const selectedChords = selectors.getSelectedChords(state);
  const availableChords = selectors.getAvailableChords(state);

  const handleChordSelected = useCallback(
    (newChord) => dispatch(actions.addChord(newChord)),
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
          onChordSelected={handleChordSelected}
        />
        <ChordCardCollection
          chords={selectedChords}
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
