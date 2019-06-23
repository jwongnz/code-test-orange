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
  deleteCustomer: typeof deleteCustomer,
  searchTerm: string
}

export class CustomerList extends React.Component<AppProps> {
  deleteCustomer = (customer: Customer) => {
    this.props.deleteCustomer(customer)
  }

  render() {
    if (!(this.props.customers && this.props.customers.length > 0))
      return null;

    // TODO: Make responsive
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
          {this.props.customers.filter((customer) => {
            return  customer.firstName.toLowerCase().includes(this.props.searchTerm.toLowerCase()) ||
                    customer.lastName.toLowerCase().includes(this.props.searchTerm.toLowerCase())
          }).map((customer, index) => (
            <TableRow key={customer.id} data-test-id="customerRow">
              <TableCell>{index + 1}</TableCell>
              <TableCell>{customer.firstName}</TableCell>
              <TableCell>{customer.lastName}</TableCell>
              <TableCell>
                {/* TODO: nicer display & management of DOB - use moment? */}
                {customer.dateOfBirth.toDateString()}
              </TableCell>
              <TableCell>
                <IconButton component={Link} to={`/savecustomer/${customer.id}`} aria-label="Edit">
                  <EditIcon />
                </IconButton>
              </TableCell>
              <TableCell>
                <IconButton aria-label="Delete" onClick={() => this.deleteCustomer(customer)} data-test-id={`delete-${index}`}>
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
