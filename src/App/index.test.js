import { render, screen } from '@testing-library/react';
import App from '.';

test('renders App component', () => {
  render(<App />);
  const element = screen.getByText(/frontend developer task/i);
  expect(element).toBeInTheDocument();
});
