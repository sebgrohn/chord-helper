import React from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header"></header>
      </div>
    </ThemeProvider>
  );
}

export default App;
