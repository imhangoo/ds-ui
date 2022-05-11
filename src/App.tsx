import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tabs from './components/Tabs';

function App() {
  return (
    <div className="App">
      <Tabs></Tabs>
      <footer className="App-footer">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </footer>
    </div>
  );
}

export default App;
