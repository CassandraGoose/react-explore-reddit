import { render, screen } from '@testing-library/react';
import App from './App';

// no tests for this - as it is purely an exercise and the goal isn't testing!
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
