import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../store';
import { deleteCustomer } from '../../store/customers/actions';
import { Customer } from '../../store/customers/types';
import { Table, TableBody, TableCell, TableHead, TableRow, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Link } from 'react-router-dom';

interface AppProps {
  customers: Customer[],
  deleteCustomer: typeof deleteCustomer
}

class CustomerList extends React.Component<AppProps> {
  deleteCustomer = (customer: Customer) => {
    this.props.deleteCustomer(customer)
  }

  render() {
    if (!(this.props.customers && this.props.customers.length > 0))
      return null;

    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Date of Birth</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.props.customers.map((customer, index) => (
            <TableRow key={customer.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{customer.firstName}</TableCell>
              <TableCell>{customer.lastName}</TableCell>
              <TableCell>
                {customer.dateOfBirth.toDateString()}
              </TableCell>
              <TableCell>
                <IconButton component={Link} to={`/savecustomer/${customer.id}`} aria-label="Edit">
                  <EditIcon />
                </IconButton>
              </TableCell>
              <TableCell>
                <IconButton aria-label="Delete" onClick={() => this.deleteCustomer(customer)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
}

const mapStateToProps = (state: AppState) => ({
  customers: state.customers
});

const mapDispatchToProps = { deleteCustomer };

export default connect(mapStateToProps, mapDispatchToProps)(CustomerList);
