import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

// components
import HomePage from './pages/homepage.component';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
