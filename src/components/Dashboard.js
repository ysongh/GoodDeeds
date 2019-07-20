import React, { Component } from 'react';

import BarGraph from './BarGraph';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      amount: 0
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(e){
    const value = e.target.value;

    this.setState({amount: value});
  }

    render() {
      return (
        <div>
            <h1 className="center zeroMargin">Dashboard</h1>
            <div class="row">
              <div class="col s12 center__submitArea">
                <p className="userPara">Token Balance: 100</p>
                <p className="userPara">Donated Token Amount:</p>
                <div class="input-field inline">
                  <input
                    id="email_inline"
                    type="number"
                    className="validate center"
                    value={this.state.amount}
                    onChange={this.onChange} />
                  <label for="email_inline"></label>
                </div>
              </div>
              <div className="center">
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                  <input type="hidden" name="cmd" value="_s-xclick" />
                  <input type="hidden" name="hosted_button_id" value="KGHTHNQQNG7EW" />
                  <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_paynow_LG.gif
              " border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                  <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif
              " width="1" height="1" />
                </form>
              </div>
              
            </div>
            <BarGraph title="Donation By Nonprofit Organization"/>
            <BarGraph title="Direct VS. Indirection Donation"/>
        </div>
      );
    }
}

export default Dashboard; 