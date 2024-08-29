import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the title of the first slide', () => {
  render(<App />);
  const titleElement = screen.getByText(/What is a boost?/i);
  expect(titleElement).toBeInTheDocument();
});
