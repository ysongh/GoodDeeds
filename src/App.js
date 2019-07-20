import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import User from './components/User';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/user" component={User} />
      </Router>
      
    </div>
  );
}

export default App;
