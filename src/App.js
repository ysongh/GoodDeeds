import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Route exact path="/" component={Dashboard} />
      </Router>
      
    </div>
  );
}

export default App;
