import React from 'react';
import { shallow } from 'enzyme';
import { Wallet } from './Wallet';

describe('Wallet', () => {
  const dispatchDepositMock = jest.fn();
  const dispatchWithdrawMock = jest.fn();

  const wallet = shallow(
    <Wallet
      balance={20}
      deposit={dispatchDepositMock}
      withdraw={dispatchWithdrawMock}
    />
  );

  it('renders properly', () => {
    expect(wallet).toMatchSnapshot();
  });

  it('initializes with a default state', () => {
    expect(wallet.state('inputWallet')).toBe(0);
  });

  it('displays the balance from props', () => {
    expect(wallet.find('h2').text()).toEqual('Wallet Balance : 20');
  });

  it('creates an input to deposit into or withdraw from the balance', () => {
    expect(wallet.find('.input-wallet')).toBeTruthy();
  });

  it('when the user types into the `input-wallet` the state should update', () => {
    const input = wallet.find('.input-wallet');

    input.simulate('change', { target: { value: 20 } });

    expect(wallet.state('inputWallet')).toBe(20);
  });

  it('when the user wants to make a deposit', () => {
    const inputValue = wallet.find('.input-wallet');
    const button = wallet.find('.input-deposit');

    inputValue.simulate('change', { target: { value: 60 } });
    button.simulate('click');

    expect(dispatchDepositMock).toHaveBeenCalledWith(60);
  });

  it('when the user wants to make a withdraw', () => {
    const inputValue = wallet.find('.input-wallet');
    const button = wallet.find('.input-withdraw');

    inputValue.simulate('change', { target: { value: 60 } });
    button.simulate('click');

    expect(dispatchWithdrawMock).toHaveBeenCalledWith(60);
  });
});
