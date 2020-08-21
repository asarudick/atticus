import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Play from './components/Play';
import Album from './components/Album';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/play/:id">
          <Play />
        </Route>
        <Route path="/artist/:id">
        </Route>
        <Route path="/album/:id">
          <Album />
        </Route>
        <Route path="/">
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
