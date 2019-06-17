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
  firstName: string,
  lastName: string,
  dateOfBirth: string
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

// TODO: import material before styled components instead
const SaveButton = styled(Button)`
  && {
    margin-left: 20px;
  }
`

class CustomerAddOrUpdate extends React.Component<Props, State> {
  existingCustomer?: Customer;

  constructor(props: Props) {
    super(props);

    this.existingCustomer = this.props.customers.find((customer) => {
      return customer.id === this.props.match.params.id;
    });
  
    this.state = {
      firstName: this.existingCustomer ? this.existingCustomer.firstName : '',
      lastName: this.existingCustomer ? this.existingCustomer.lastName : '',
      dateOfBirth: this.existingCustomer ? this.existingCustomer.dateOfBirth.toISOString().substr(0, 10) : ''
    };
  }

  handleInputChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    this.setState((current) => ({
      ...current,
      [name]: target.value
    }));
  };

  saveCustomer = () => {
    const saveCustomer = this.existingCustomer ? this.props.updateCustomer : this.props.addCustomer;

    saveCustomer({
      id: this.existingCustomer ? this.existingCustomer.id : uuid.v4(),
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      dateOfBirth: new Date(this.state.dateOfBirth)
    });

    this.props.history.push('/');
  }

  render() {
    return (
      // TODO: form validation
      <Form noValidate>
        <h1>{this.existingCustomer ? 'Edit' : 'Add'} Customer</h1>
        <TextField
          required
          id="firstName"
          label="First Name"
          value={this.state.firstName}
          onChange={this.handleInputChange('firstName')}
          margin="normal"
        />
        <TextField
          required
          id="lastName"
          label="Last Name"
          value={this.state.lastName}
          onChange={this.handleInputChange('lastName')}
          margin="normal"
        />
        <TextField
          required
          id="dateOfBirth"
          label="Date of Birth"
          type="date"
          value={this.state.dateOfBirth}
          onChange={this.handleInputChange('dateOfBirth')}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <ButtonWrapper>
          <Button component={Link} to={'/'} variant="contained" color="primary">Cancel</Button>
          <SaveButton variant="contained" color="primary" onClick={() => this.saveCustomer()}>Save</SaveButton>
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
