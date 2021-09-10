import { render, screen } from '@testing-library/react';
import Loading from './Loading';

test('render loader', () => {
  render(<Loading />);
  const element = screen.getByTestId('loader');
  expect(element).toBeInTheDocument();
});
