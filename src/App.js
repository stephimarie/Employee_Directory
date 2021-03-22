import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from './Nav';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <h1>Hello World</h1>

      <div>
        <Nav />
      </div>
    </div>
  );
}

export default App;
