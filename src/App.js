import React from 'react';
import './App.css';
import Display from 'components/Display'
import DisplayTabs from 'components/DisplayTabs'
import MediaChooser from 'components/MediaChooser'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        <DisplayTabs />
        <Display />
        <MediaChooser />
      </main>
    </div>
  );
}

export default App;
