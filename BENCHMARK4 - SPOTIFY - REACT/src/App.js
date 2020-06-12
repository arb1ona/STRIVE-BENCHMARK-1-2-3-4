import React from 'react';
import logo from './logo.svg';
import './App.css';
import Fixedbar from "./Components/Fixedbar"
import Homepage from "./Components/Homepage"

function App() {
  return (
    <div className="App">
      <Fixedbar />
      <Homepage />
    </div>
  );
}

export default App;
