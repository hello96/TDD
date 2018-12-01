import React from 'react';
import { shallow } from 'enzyme';
import Gift from './Gift';

describe('Gift', () => {
  const removeGiftMock = jest.fn();
  const gift = shallow(<Gift gift={{ id: 0 }} removeGift={removeGiftMock} />);

  it('should render', () => {
    expect(gift).toMatchSnapshot();
  });

  it('initializes a person and present in `state`', () => {
    expect(gift.state()).toEqual({
      person: '',
      present: ''
    });
  });

  describe('when typing into the preson input', () => {
    const input = gift.find('.input-person');

    beforeEach(() => {
      input.simulate('change', { target: { value: 'Uncle Mle' } });
    });

    afterEach(() => {
      gift.setState({
        person: '',
        present: ''
      });
    });

    it('should update the state', () => {
      expect(gift.state().person).toEqual('Uncle Mle');
    });
  });

  describe('when typing into the present input', () => {
    const input = gift.find('.input-present');

    beforeEach(() => {
      input.simulate('change', { target: { value: 'Croccantino' } });
    });

    afterEach(() => {
      gift.setState({
        person: '',
        present: ''
      });
    });

    it('should update the state', () => {
      expect(gift.state().present).toEqual('Croccantino');
    });
  });

  describe('when clicking the `Remove Gift` button', () => {
    beforeEach(() => {
      gift.find('.btn-remove').simulate('click');
    });

    it('calls the removeGift callback', () => {
      expect(removeGiftMock).toHaveBeenCalledTimes(1);
      expect(removeGiftMock).toHaveBeenCalledWith(0);
    });
  });
});
