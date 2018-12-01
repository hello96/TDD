import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import idgen, { resetID } from '../idgen';

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
    });

    afterEach(() => {
      resetID();
      app.setState({ gifts: [] });
    });

    it('should update states with a new gift', () => {
      expect(app.state().gifts).toEqual([{ id: 0 }]);
    });

    it('should add a new gift to the rendered list', () => {
      expect(app.find('.gift-list').children().length).toEqual(1);
    });

    it('should create a Gift component', () => {
      expect(app.find('Gift').exists()).toBe(true);
    });
  });

  describe('when a user want to remove the added gift', () => {
    beforeEach(() => {
      app.find('.btn-add').simulate('click');
      app.instance().removeGift(0);
    });

    it('removes the gift from `state`', () => {
      expect(app.state().gifts).toEqual([]);
    });
  });
});
