import React, { Component } from 'react';

import BarGraph from './BarGraph';

class Dashboard extends Component {
    render() {
      return (
        <div>
            <h1 className="center zeroMargin">Dashboard</h1>
            <BarGraph title="Donation By Nonprofit Organization"/>
            <BarGraph title="Direct VS. Indirection Donation"/>
        </div>
      );
    }
}

export default Dashboard; 