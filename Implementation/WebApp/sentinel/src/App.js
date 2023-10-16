import logo from './logo.svg';
import './App.css';
import React from "react";
import MapContainer from './Components/Maps/MapContainer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <MapContainer/>
    </div>
    
  );
}

export default App;
