import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Track from './components/Track';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/track/:id">
          <Track />
        </Route>
        <Route path="/artist/:id">
        </Route>
        <Route path="/album/:id">
        </Route>
        <Route path="/">
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
