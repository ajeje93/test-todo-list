import React from 'react';
import './App.css';
import ItemList from './components/ItemList';
import NavigationBar from './components/NavigationBar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import RandomFact from './components/RandomFact';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 50
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
        <Switch>
          <Route path="/:type?">
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Grid item xs>
                <RandomFact />
              </Grid>
              <Grid item xs>
                <ItemList />
              </Grid>
            </Grid>
          </Route>
        </Switch>
        <NavigationBar />
      </div>
    </Router>
  );
}

export default App;
