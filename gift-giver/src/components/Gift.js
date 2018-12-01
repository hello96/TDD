import React, { Component } from 'react';
import {
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Button
} from 'react-bootstrap';

export default class Gift extends Component {
  state = {
    person: '',
    present: ''
  };

  setPerson = ({ target: { value: person } }) => {
    this.setState({
      person
    });
  };

  setPresent = ({ target: { value: present } }) => {
    this.setState({
      present
    });
  };

  render() {
    const {
      gift: { id: giftId },
      removeGift
    } = this.props;

    return (
      <>
        <Form>
          <FormGroup>
            <ControlLabel>Person</ControlLabel>
            <FormControl className="input-person" onChange={this.setPerson} />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Present</ControlLabel>
            <FormControl className="input-present" onChange={this.setPresent} />
          </FormGroup>
          <Button
            className="btn-remove btn-danger"
            onClick={() => removeGift(giftId)}
          >
            Remove a gift
          </Button>
        </Form>
      </>
    );
  }
}
