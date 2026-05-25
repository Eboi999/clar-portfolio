import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders developer name in heading', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /Clarence Dave/i });
  expect(heading).toBeInTheDocument();
});
