import React from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import Box from './Components/Box';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <Box width={20} height={5}>
            Abra cadabra, ling string here lorem ipsum. tooo long for the box,
            it is. 🎈🎄🎋🎍🎗🦺🧦
          </Box>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
