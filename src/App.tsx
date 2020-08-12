import React from 'react';
import SearchForm from './SearchForm/searchform'
import Container from '@material-ui/core/Container'
import ThemeProvider from '@material-ui/styles/ThemeProvider'
import { createMuiTheme } from '@material-ui/core/styles'
import grey from '@material-ui/core/colors/grey'
import blueGrey from '@material-ui/core/colors/blueGrey';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blueGrey[500],
    },
    secondary: {
      main: grey[500],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <SearchForm />
      </Container>
    </ThemeProvider>
  );
}

export default App;
