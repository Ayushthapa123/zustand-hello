import React from 'react';
import { Countfive } from './components/Countfive';
import { Decreasebyfive } from './components/Decreasebyfive';

import './App.css';

function App() {
  return (
    <div className="App">
      <h2>hello</h2>
      <Countfive/>
      <Decreasebyfive/>
    </div>
  );
}

export default App;
