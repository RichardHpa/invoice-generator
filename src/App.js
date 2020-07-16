import React from 'react';
import { createTheme } from './theme/theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createStyles, makeStyles, ThemeProvider } from '@material-ui/core';
import Dashboard from './Dashboard';

const useStyles = makeStyles(() =>
  createStyles({
    '@global': {
      '*': {
        boxSizing: 'border-box',
        margin: 0,
        padding: 0,
      },
      html: {
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
        height: '100%',
        width: '100%',
      },
      body: {
        height: '100%',
        width: '100%',
      },
      '#root': {
        height: '100%',
        width: '100%',
      },
    },
  })
);

function App() {
  useStyles();

  return (
    <ThemeProvider theme={createTheme()}>
      <CssBaseline />
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
