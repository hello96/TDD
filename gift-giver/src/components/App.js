import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Gift from './Gift';
import idgen from '../idgen';
class App extends Component {
  state = {
    gifts: []
  };

  addGift = () => {
    this.setState(({ gifts: prevGifts }) => ({
      gifts: prevGifts.concat({
        id: idgen()
      })
    }));
  };

  removeGift = giftId => {
    this.setState(({ gifts: prevGifts }) => ({
      gifts: prevGifts.filter(gift => gift.id !== giftId)
    }));
  };

  render() {
    const { gifts } = this.state;

    return (
      <div>
        <h2>Gift Giver</h2>
        <div className="gift-list">
          {gifts.map((gift, index) => (
            <Gift key={index} gift={gift} removeGift={this.removeGift} />
          ))}
        </div>
        <Button className="btn-add" onClick={this.addGift}>
          Add a gift
        </Button>
      </div>
    );
  }
}

export default App;
