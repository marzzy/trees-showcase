import { render, screen, fireEvent } from '@testing-library/react';
import Card from './Card';

beforeEach(() => {
  render(
    <Card
      name="Baobab"
      speciesName="Adansonia"
      imageSrc="https://upload.wikimedia.org/wikipedia/commons/3/36/Baobab_Adansonia_digitata.jpg"
    />,
  );
});

test('render initial card data', () => {
  const name = screen.getByText(/Baobab/i);
  const species = screen.getByText(/Adansonia/i);
  const button = screen.getByText(/Show Image/i);
  const imageReplacement = screen.getByTestId('card-image-replacement');

  expect(name).toBeInTheDocument();
  expect(species).toBeInTheDocument();
  expect(button).toBeInTheDocument();
  expect(imageReplacement).toBeInTheDocument();
});

test('show image by click', () => {
  fireEvent.click(screen.getByText(/Show Image/i));

  expect(screen.getByText(/Hide Image/i)).toBeInTheDocument();
  expect(screen.getByTestId('card-image')).toBeInTheDocument();
});
