import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Input, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import styled from 'styled-components';
import CustomerList from '../../containers/customer-list/customer-list';

const Container = styled.div`
`

const ActionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`

const CustomerDashboard: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  }

  return (
    <Container>
      <ActionsWrapper>
        <Input  type="search" placeholder="Search for customer" value={searchTerm} onChange={handleSearchInputChange}
                endAdornment={
                  <InputAdornment position="end">
                    <SearchIcon/>
                  </InputAdornment>}>
        </Input>
        <Button component={Link} to={'/saveCustomer/'} variant="contained" color="primary">Add Customer</Button>
      </ActionsWrapper>
      <CustomerList searchTerm={searchTerm} />
    </Container>
  );
}

export default CustomerDashboard;
