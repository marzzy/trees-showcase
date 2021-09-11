import { render, screen } from '@testing-library/react';
import Notfound from './Notfound';

test('render notfound', () => {
  render(<Notfound />);
  const element = screen.getByText(/Sorry, We couldnt find the trees/i);
  expect(element).toBeInTheDocument();
});
