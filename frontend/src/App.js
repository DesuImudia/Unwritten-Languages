import React from 'react';
import './App.css';
import './leaflet/leaflet.css';
import LangMap from './components/LangMap.jsx';
import Mic from './components/Mic.jsx'

class App extends React.Component {
  constructor() {
    super();
    this.map = LangMap;
  }
  
  render() {
    return (
      <div className="App">
        <Mic />
      </div>
    );
  }
}

export default App;
