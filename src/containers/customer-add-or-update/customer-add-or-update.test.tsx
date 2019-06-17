import React from 'react';
import ReactDOM from 'react-dom';
import CustomerAddOrUpdate from './customer-add-or-update';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CustomerAddOrUpdate />, div);
  ReactDOM.unmountComponentAtNode(div);
});
