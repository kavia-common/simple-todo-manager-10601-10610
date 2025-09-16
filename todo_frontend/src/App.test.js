import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Home screen title', () => {
  render(<App />);
  const title = screen.getByText(/Foodgo/i);
  expect(title).toBeInTheDocument();
});
