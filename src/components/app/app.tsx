import React from 'react';
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import CustomerList from '../../containers/customer-list/customer-list'

const App: React.FC = () => {
  const Container = styled.div`
    max-width: 1200px;
    margin: auto;
    padding: 50px;
  `

  return (
    <Container>
      <CustomerList />
      <Button variant="contained" color="primary">Add Customer</Button>
    </Container>
  );
}

export default App;
