import React, { useCallback, useReducer } from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import ChordDefinition from './Components/ChordDefinition';
import ChordSelector from './Components/ChordSelector';
import StringChord from './Components/StringChord';
import * as actions from './Store/actions';
import reducer, { initialState } from './Store/reducer';
import * as selectors from './Store/selectors';
import { theme } from './theme';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const selectedChord = selectors.getSelectedChord(state);

  const handleSelectedChordChange = useCallback(
    (newSelectedChord) => dispatch(actions.setSelectedChord(newSelectedChord)),
    [dispatch],
  );

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <ChordSelector
            selectedChord={selectedChord}
            onSelectedChordChange={handleSelectedChordChange}
          />
          <ChordDefinition chord={selectedChord} />
          <StringChord chord={selectedChord} />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
