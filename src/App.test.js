import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Radiant Bronzing Boutique LLC/i);
  expect(linkElement).toBeInTheDocument();
});
