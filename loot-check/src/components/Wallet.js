import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Wallet extends Component {
  render() {
    const { balance } = this.props;

    return (
      <div>
        <h2>Wallet Balance : {balance}</h2>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  balance: state
});

export default connect(
  mapStateToProps,
  null
)(Wallet);
