import React from 'react';
import './App.css';
import Display from './components/Display'
import MediaChooser from './components/MediaChooser'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MediaChooser />
      </header>
      <main>
        <Display />
      </main>
    </div>
  );
}

export default App;
