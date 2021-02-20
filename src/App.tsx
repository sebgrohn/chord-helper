import React, { Fragment, useCallback, useReducer } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import './App.css';
import ChordDefinition from './Components/ChordDefinition';
import ChordSelector from './Components/ChordSelector';
import StringChord from './Components/StringChord';
import * as actions from './Store/actions';
import reducer, { initialState } from './Store/reducer';
import * as selectors from './Store/selectors';
import { theme } from './theme';

const ChordCollection = styled.div`
  display: flex;
  column-gap: 10px;
`;

const ChordContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const selectedChords = selectors.getSelectedChords(state);
  const availableChords = selectors.getAvailableChords(state);

  const handleChordSelected = useCallback(
    (newChord) => dispatch(actions.addChord(newChord)),
    [dispatch],
  );

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <ChordSelector
            chords={availableChords}
            onChordSelected={handleChordSelected}
          />
          <ChordCollection>
            {selectedChords.map((c) => (
              <ChordContainer key={c}>
                <ChordDefinition chord={c} />
                <StringChord chord={c} />
              </ChordContainer>
            ))}
          </ChordCollection>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
