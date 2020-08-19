import React, { useState, Context } from 'react';
import SearchForm from './SearchForm/SearchForm'
import { Grid } from '@material-ui/core'
import ThemeProvider from '@material-ui/styles/ThemeProvider'
import { createMuiTheme } from '@material-ui/core/styles'
import grey from '@material-ui/core/colors/grey'
import blueGrey from '@material-ui/core/colors/blueGrey';
import { Router, Link } from '@reach/router';
import LoginForm from './Login/LoginForm';
import NavBar from './Nav/NavBar';
import UserContext from './Auth/UserContext';
import { User } from './Auth/AuthService';

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

  const userHook = useState({} as User);

  return (
    <React.StrictMode>
      <UserContext.Provider value={userHook}>
        <ThemeProvider theme={theme}>
          <Grid container spacing={3}>
            <Grid container justify="center">
              <Grid xs={6}></Grid>
              <Grid xs={4}><NavBar /></Grid>
              <Grid xs={6}>
                <Router>
                  <SearchForm path="/" />
                  <LoginForm path="/login" />
                </Router>
              </Grid>
            </Grid>
          </Grid>
        </ThemeProvider>
      </UserContext.Provider>
    </React.StrictMode>
  );
}

export default App;
