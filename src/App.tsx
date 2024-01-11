import React from 'react';
import './App.css';
import ZooComponent from './components/ZooComponent';
import JokeComponent from './components/JokeComponent';

function App() {
  return (
    <div className="App">
      <ZooComponent />
      <hr style={{ margin: '50px 0' }} />
      <JokeComponent />
    </div>
  );
}

export default App;
