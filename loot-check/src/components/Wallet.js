import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deposit, withdraw } from '../actions/balance';

export class Wallet extends Component {
  state = {
    inputWallet: 0
  };

  render() {
    const { balance } = this.props;

    return (
      <div>
        <h2>Wallet Balance : {balance}</h2>
        <input
          value={this.state.inputWallet}
          className="input-wallet"
          type="number"
          onChange={({ target: { value: inputWallet } }) => {
            this.setState({
              inputWallet
            });
          }}
        />
        <button
          className="input-deposit"
          onClick={() => {
            this.props.deposit(parseInt(this.state.inputWallet));
          }}
        >
          Deposit
        </button>
        <button
          className="input-withdraw"
          onClick={() => {
            this.props.withdraw(parseInt(this.state.inputWallet));
          }}
        >
          Withdraw
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  balance: state
});
export default connect(
  mapStateToProps,
  {
    deposit,
    withdraw
  }
)(Wallet);
