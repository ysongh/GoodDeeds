import Chart from "react-apexcharts";
import React from 'react';

class BarGraph extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        options: {
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: ["Direct Donation", "1st Indirection Donation", "2nd Indirection Donation"]
          }
        },
        series: [
          {
            name: "USD",
            data: [30, 40, 45]
          }
        ]
      };
  }

  render() {
    return (
        <div className="centerIt">
          <div className="row">
            <div className="mixed-chart">
              <h4 className="center">{this.props.title}</h4>
              <Chart
                  options={this.state.options}
                  series={this.state.series}
                  type="bar"
                  width="800"
                  height="200"
                  style={{ margin: "0 auto"}}
              />
            </div>
          </div>
        </div>
    );
  }
}

export default BarGraph; 