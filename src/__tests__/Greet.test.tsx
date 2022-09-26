import { render, screen } from '@testing-library/react';
import { Greet } from '../components/Greet';

test('Greet should render Guest without correct prop', () => {
  render(<Greet />);

  const headingElement = screen.getByRole('heading');
  expect(headingElement).toHaveTextContent(/Welcome Guest/);
});

test('Greet should render name with correct prop', () => {
  render(<Greet name="Prakash" isLoggedIn={true} />);

  const headingElement = screen.getByRole('heading');
  expect(headingElement).toHaveTextContent(/Welcome Prakash/);
});

test('Greet should show correct message count if passed', () => {
  render(<Greet name="Prakash" isLoggedIn={true} messageCount={10} />);
  const headingElement = screen.getByRole('heading');

  expect(headingElement).toHaveTextContent(/You have 10 unread messages/);
});
