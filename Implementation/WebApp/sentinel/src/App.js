import logo from './logo.svg';
import './App.css';
import React from "react";
import MapContainer from './Components/Maps/MapContainer';


function App() {
  return (
    <div className="App">
      <div>
        <input height={50}></input>
        <img src='./user.png' height={50}></img>
      </div>
      <MapContainer/>
    </div>
    
  );
}

export default App;
