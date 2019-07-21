import React, { Component } from 'react';

import BarGraph from './BarGraph';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      balance: 0,
      address: "",
      customerAddress: "",
      customerBalance: ""
    };
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount(){
    let url = `http://localhost:8081/api/v1/balance/0xd851C19d71Ea51F8E65333f0d61EDEb41d37313f`;
    fetch(url)
    .then(res => {
        return res.json();
    })
    .then(data => {
        this.setState({
          balance: data.balance,
          address: data.addr
        })
    })
    .catch((err) => {
        console.log('There was a problem with your fetch request' + err.message);
    });
  }

  onChange(e){
    const name= e.target.name;
    const value = e.target.value;

    this.setState({[name]: value});
  }

  checkCustomerBalance(){
    let url = `http://localhost:8081/api/v1/balance/${this.state.customerAddress}`;
    fetch(url)
    .then(res => {
        return res.json();
    })
    .then(data => {
        this.setState({
          customerBalance: data.balance,
        })
    })
    .catch((err) => {
        console.log('There was a problem with your fetch request' + err.message);
    });
  }

    render() {
      return (
        <div>
          <br></br>
            <h3 className="center zeroMargin">ConsenSys</h3>
          
            <div className="row">
              <div className="col s12 center__submitArea">
                <br></br>
                <p className="userPara">Address: {this.state.address}</p>
                <p className="userPara">Token Balance: {this.state.balance}</p>
                <p className="userPara">Donated Token Amount: 0</p>
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

              <div className="row">
                <div className="col s6">
                  <input
                  id="email_inline"
                  name="customerAddress"
                  type="text"
                  className="validate"
                  placeholder="Customer Address"
                  value={this.state.customerAddress}
                  onChange={this.onChange} />
                </div>
                <div className="col s6">
                  <p className="userPara center">{this.state.customerBalance ? "Token Balance:" + this.state.customerBalance : null}</p>
                </div>
              </div>
              
              <button
                className="waves-effect waves-light btn"
                onClick={() => this.checkCustomerBalance()}>
                  Find Balance
              </button>

            </div>


            </div>
            <BarGraph title="Donation By Nonprofit Organization"/>
            <BarGraph title="Direct VS. Indirection Donation"/>
        </div>
      );
    }
}

export default Dashboard; 