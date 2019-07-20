import React, { Component } from 'react';

import BarGraph from './BarGraph';
import Logo from '../img/goodeedslogo.png';

class Dashboard extends Component {
    render() {
      return (
        <div>
            <img src={Logo} className="dashboard__logo" alt="Logo"/>
            <h1>Dashboard</h1>
            <BarGraph />
        </div>
      );
    }
}

export default Dashboard; 