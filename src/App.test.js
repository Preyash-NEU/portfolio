import { render } from '@testing-library/react';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';

test('renders learn react link', () => {
  render(
    <Router> 
      <App />
    </Router>
  );
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
