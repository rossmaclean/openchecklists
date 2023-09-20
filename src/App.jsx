import './App.css';
import React from 'react';
import Checklists from './components/checklists/Checklists';

function App() {
  return (
    <div className="app-container">
      <Checklists />
      {/* <Flipbook aircraft={'c152'}/> */}
    </div>
  );
}

export default App;
