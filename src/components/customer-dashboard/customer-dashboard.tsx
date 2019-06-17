import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import styled from 'styled-components'
import CustomerList from '../../containers/customer-list/customer-list'

const Container = styled.div`
`

const ActionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`

const CustomerDashboard: React.FC = () => {
  return (
    <Container>
      <ActionsWrapper>
        <Button component={Link} to={'/saveCustomer/'} variant="contained" color="primary">Add Customer</Button>
      </ActionsWrapper>
      <CustomerList />
    </Container>
  );
}

export default CustomerDashboard;
