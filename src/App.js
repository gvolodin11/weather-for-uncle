import React from 'react'
import logo from './logo.svg'
import './App.css'
import ApiCall from "./api/ApiCall";

function App() {
  return (
    <div className="App">
      <ApiCall apiKey={'3c4e4a7b2a70aea34a01c37628cbb6de'}/>
    </div>
  );
}

export default App;
