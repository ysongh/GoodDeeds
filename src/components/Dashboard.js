import React, { Component } from 'react';

import BarGraph from './BarGraph';

class Dashboard extends Component {
    render() {
      return (
        <div>
            <h1>Dashboard</h1>
            <BarGraph />
        </div>
      );
    }
}

export default Dashboard; 