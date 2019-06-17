import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components'
import CustomerDashboard from '../customer-dashboard/customer-dashboard';
import CustomerAddOrUpdate from '../../containers/customer-add-or-update/customer-add-or-update';

const App: React.FC = () => {
  const Container = styled.div`
    max-width: 1200px;
    margin: auto;
    padding: 50px;
  `

  return (
    <Container>
      <Router>
        <Route path="/" exact component={CustomerDashboard} />
        <Route path="/saveCustomer/:id?" component={CustomerAddOrUpdate} />
      </Router>
    </Container>
  );
}

export default App;
