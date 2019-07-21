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
          <br></br>
            <h3 className="center zeroMargin">ConsenSys</h3>
          
            <div class="row">
              <div class="col s12 center__submitArea">
                <br></br>
                <p className="userPara">Token Balance: 100</p>
                <p className="userPara">Donated Token Amount: 50</p>
                <br></br> 
              </div>
             <br></br>
              <div className="center">
              <br></br>
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                  <input type="hidden" name="cmd" value="_s-xclick" />
                  <input type="hidden" name="hosted_button_id" value="KGHTHNQQNG7EW" />
                  <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_paynow_LG.gif
              " border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                  <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif
              " width="1" height="1" />
                </form>
              </div>
              
              <div>
              <h3 className="userSectionTitle">Forward Tokens to your Customers</h3>
              <ol className="marginLeft">
                <li className="userPara marginYHigh">Address</li>
                <li className="userPara marginYHigh">Address</li>
                <li className="userPara marginYHigh">Address</li>
              </ol>
            </div>


            </div>
            <BarGraph title="Donation By Nonprofit Organization"/>
            <BarGraph title="Direct VS. Indirection Donation"/>
        </div>
      );
    }
}

export default Dashboard; 