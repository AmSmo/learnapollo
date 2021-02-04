import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import First from './First';

function App() {
  return (
    <div className="App">
      YO!
      <Switch>
        <Route path="/" component={First} />
      </Switch>
    </div>
  );
}

export default App;
