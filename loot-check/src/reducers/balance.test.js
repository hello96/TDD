import balanceReducer from './balance';
import * as constants from '../actions/constants';

describe('balanceReducer', () => {
  it('sets a balance', () => {
    const balance = 10;

    expect(
      balanceReducer(undefined, {
        type: constants.SET_BALANCE,
        balance
      })
    ).toEqual(balance);
  });

  it('deposit into the balance', () => {
    const deposit = 10;

    expect(
      balanceReducer(10, {
        type: constants.DEPOSIT,
        deposit
      })
    ).toEqual(20);
  });

  describe('withdrawing from the balance', () => {
    it('when the requested amount is larger then the balance', () => {
      const withdraw = 20;
      expect(
        balanceReducer(10, {
          type: constants.WITHDRAW,
          withdraw
        })
      ).toEqual(10);
    });

    it('when the requested amount is smaller or equal then the balance', () => {
      const withdraw = 20;
      expect(
        balanceReducer(20, {
          type: constants.WITHDRAW,
          withdraw
        })
      ).toEqual(0);
    });
  });
});
