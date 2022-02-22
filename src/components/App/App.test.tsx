import { render, screen } from '@testing-library/react';
import App from './index';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/fit trax/i);
  expect(linkElement).toBeInTheDocument();
});
