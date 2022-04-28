import React from 'react';
import './App.css';
import Individual from './components/Individual';
import Integration from './components/Integration';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Individual />
      <hr />
      <Integration />
      <hr />
      <Counter />
    </div>
  );
}

export default App;
