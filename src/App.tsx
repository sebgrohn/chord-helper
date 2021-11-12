import { Footer, Grommet, Header, Heading, Main, Text } from 'grommet';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Link from './Components/Link';
import useStoringReducer from './Hooks/useStoringReducer';
import ChordSetPage from './Pages/ChordSetPage';
import ChordSetsPage from './Pages/ChordSetsPage';
import NotFoundPage from './Pages/NotFoundPage';
import reducer, { initialState, migrateState } from './Store/reducer';
import theme from './theme';

const applicationStateStorageKey = 'applicationState';

function App() {
  const [state, dispatch] = useStoringReducer(
    applicationStateStorageKey,
    reducer,
    migrateState,
    initialState,
  );

  return (
    <Grommet full theme={theme} themeMode="dark">
      <Header
        pad={{ vertical: 'medium', horizontal: 'large' }}
        background="brand"
      >
        <Heading size="small" margin="none">
          <Link to="/">Chord Helper</Link>
        </Heading>
      </Header>
      <Main pad="large">
        <Routes>
          <Route
            path="/"
            element={<ChordSetsPage state={state} dispatch={dispatch} />}
          ></Route>
          <Route
            path="chord-sets/:chordSetId"
            element={<ChordSetPage state={state} dispatch={dispatch} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
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
