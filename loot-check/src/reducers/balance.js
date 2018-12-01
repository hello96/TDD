import * as constants from '../actions/constants';

const balance = (state = 10, action) => {
  switch (action.type) {
    case constants.SET_BALANCE:
      return action.balance;

    case constants.DEPOSIT:
      return state + action.deposit;

    case constants.WITHDRAW:
      return action.withdraw > state ? state : state - action.withdraw;

    default:
      return state;
  }
};

export default balance;
