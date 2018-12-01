import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
    const app = shallow(<App />);
    
    it('renders correctly', () => {
        expect(app).toMatchSnapshot();
    });
    
    it('initializes the state with an empty list of gifts', () => {
        expect(app.state().gifts).toEqual([]);
    });
    
    describe('when clicking the button to add gifts', () => {
        beforeEach(() => {
            app.find('.btn-add').simulate('click');
        })

        afterEach(() => {
            app.setState({gifts: []})
        })

        it('should update states with a new gift', () => {
            expect(app.state().gifts).toEqual([{name: 'Regalo per mle'}])
        })
        
        it('should add a new gift to the rendered list', () => {
            expect(app.find('.gift-list').children().length).toEqual(1)
        })
    })
})