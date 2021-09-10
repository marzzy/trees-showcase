import { render, screen } from '@testing-library/react';
import Notfound from './Notfound';

// TODO: style it

test('render notfound', () => {
  render(<Notfound />);
  const element = screen.getByText(/We couldnt find any card/i);
  expect(element).toBeInTheDocument();
});
