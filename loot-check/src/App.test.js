import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Wallet from './components/Wallet';

describe('App', () => {
  const app = shallow(<App />);

  it('should render', () => {
    expect(app).toMatchSnapshot();
  });

  it('should render a Wallet component', () => {
    expect(app.contains(<Wallet />)).toEqual(true);
  });
});
