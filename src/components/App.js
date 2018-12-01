import React, { Component } from 'react';
import {Button} from 'react-bootstrap'

class App extends Component {
    state = {
        gifts: []
    }

    addGift = () => {
        this.setState(prevState => ({
            gifts: prevState.gifts.concat({
                name: 'Regalo per mle'
            })
        }))
    }

    render() {
        const { gifts } = this.state

        return (
            <div>
                <h2>Gift Giver</h2>
                <div>
                    <ul className="gift-list">
                    {gifts.map(({name}, index) => (
                        <li key={`gift-${name.replace(' ','-')}-${index}`}>{name}</li>
                    ))}
                    </ul>
                </div>
                <Button className='btn-add' onClick={this.addGift}>Add a gift</Button>
            </div>
        )
    }
}

export default App;