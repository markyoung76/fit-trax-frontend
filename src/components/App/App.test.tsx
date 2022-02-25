import { render } from '@testing-library/react';
import App from './index';

describe('App', () => {
  test('it loads and displays app', () => {
    render(<App />);
  });
});
