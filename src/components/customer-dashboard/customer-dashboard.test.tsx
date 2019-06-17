import React from 'react';
import ReactDOM from 'react-dom';
import CustomerDashboard from './customer-dashboard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CustomerDashboard />, div);
  ReactDOM.unmountComponentAtNode(div);
});
