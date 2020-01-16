import React from 'react';
import './App.css';
import LangMap from './components/LangMap.jsx';
import Mic from './components/Mic.jsx'
import Home from './components/Home.jsx'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
    this.map = LangMap;
  }
  
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/record">Record</Link>
            </li>
            <li>
              <Link to="/map">Map</Link>
            </li>
          </ul>

          <hr />

          <Route exact path="/" component={Home} />
          <Route path="/record" component={Mic} />
          <Route path="/map" component={LangMap} />
        </div>
      </Router>
      // <div className="App">
      //   <Mic />
      // </div>
    );
  }
}

export default App;
