import React from 'react';
import { Button, TextField } from '@material-ui/core';
import { withRouter, Link, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { addCustomer, updateCustomer } from '../../store/customers/actions';
import { Customer } from '../../store/customers/types';
import uuid from 'uuid';
import { AppState } from '../../store';
import styled from 'styled-components'

interface MatchParams {
  id: string;
}

interface Props extends RouteComponentProps<MatchParams> {
  customers: Customer[],
  addCustomer: typeof addCustomer,
  updateCustomer: typeof updateCustomer
}

interface State {
  firstName: {
    value: string
    touched: boolean
    valid: boolean
  },
  lastName: {
    value: string
    touched: boolean
    valid: boolean
  },
  dateOfBirth: {
    value: string
    touched: boolean
    valid: boolean
  }
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: auto;
`

const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 48px;
`

// TODO: look into loading material UI before styled components
const SaveButton = styled(Button)`
  && {
    margin-left: 20px;
  }
`

export class CustomerAddOrUpdate extends React.Component<Props, State> {
  existingCustomer?: Customer;

  constructor(props: Props) {
    super(props);

    this.existingCustomer = this.props.customers.find((customer) => {
      return customer.id === this.props.match.params.id;
    });
  
    this.state = {
      firstName: {
        value: this.existingCustomer ? this.existingCustomer.firstName : '',
        touched: false,
        valid: this.existingCustomer ? true : false
      },
      lastName: {
        value: this.existingCustomer ? this.existingCustomer.lastName : '',
        touched: false,
        valid: this.existingCustomer ? true : false
      },
      dateOfBirth: {
        value: this.existingCustomer ? this.existingCustomer.dateOfBirth.toISOString().substr(0, 10) : '',
        touched: false,
        valid: this.existingCustomer ? true : false
      }
    };
  }

  handleInputChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    this.setState((current) => ({
      ...current,
      [name]: {
        value: target.value,
        touched: true,
        valid: !!target.value
      }
    }));
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.saveCustomer();
  }

  saveCustomer = () => {
    const saveCustomer = this.existingCustomer ? this.props.updateCustomer : this.props.addCustomer;

    saveCustomer({
      id: this.existingCustomer ? this.existingCustomer.id : uuid.v4(),
      firstName: this.state.firstName.value,
      lastName: this.state.lastName.value,
      dateOfBirth: new Date(this.state.dateOfBirth.value)
    });

    this.props.history.push('/');
  }

  formIsValid = () => {
    let valid = true;
    for (let [key, value] of Object.entries(this.state)) {
      if (!value.valid) {
        valid = false;
      }
    }

    return valid;
  }

  render() {
    return (
      <Form noValidate onSubmit={this.handleSubmit}>
        <h1>{this.existingCustomer ? 'Edit' : 'Add'} Customer</h1>
        <TextField
          required
          id="firstName"
          label="First Name"
          value={this.state.firstName.value}
          onChange={this.handleInputChange('firstName')}
          margin="normal"
          error={this.state.firstName.touched && !this.state.firstName.valid}
        />
        <TextField
          required
          id="lastName"
          label="Last Name"
          value={this.state.lastName.value}
          onChange={this.handleInputChange('lastName')}
          margin="normal"
          error={this.state.lastName.touched && !this.state.lastName.valid}
        />
        <TextField
          required
          id="dateOfBirth"
          label="Date of Birth"
          type="date"
          value={this.state.dateOfBirth.value}
          onChange={this.handleInputChange('dateOfBirth')}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          error={this.state.dateOfBirth.touched && !this.state.dateOfBirth.valid}
        />
        <ButtonWrapper>
          <Button component={Link} to={'/'} variant="contained" color="primary">Cancel</Button>
          <SaveButton type="submit" variant="contained" color="primary" disabled={!this.formIsValid()}>Save</SaveButton>
        </ButtonWrapper>
      </Form>
    )
  };
}

const mapStateToProps = (state: AppState) => ({
  customers: state.customers
});

const mapDispatchToProps = { addCustomer, updateCustomer };

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CustomerAddOrUpdate));
