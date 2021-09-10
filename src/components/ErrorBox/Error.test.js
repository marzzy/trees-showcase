import { render, screen } from '@testing-library/react';
import Error from './Error';

test('render errorbox and its msg', () => {
  render(<Error msg="thia is an error msg" />);
  const element = screen.getByText(/Oops!*thia is an error msg/i);
  expect(element).toBeInTheDocument();
});
