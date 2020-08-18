import React from 'react';
import SearchForm from './SearchForm/searchform'
import LoginInfo from './LoginInfo/loginInfo'
import { Grid } from '@material-ui/core'
import ThemeProvider from '@material-ui/styles/ThemeProvider'
import { createMuiTheme } from '@material-ui/core/styles'
import grey from '@material-ui/core/colors/grey'
import blueGrey from '@material-ui/core/colors/blueGrey';
import { Router, Link } from '@reach/router';

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
      <Grid container spacing={3}>
        <Grid item xs={8}>
        </Grid>
        <Grid item xs={4}>
          <LoginInfo />
        </Grid>
        <Grid container justify="center">
          <Grid xs={6}>
            <SearchForm />
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
