import { render, screen } from '@testing-library/react';
import { Profile } from './Profile';

describe('Profile', () => {
  test('should render correctly without props', () => {
    render(<Profile />);
    const divElement = screen.getByRole('profile-desc');
    expect(divElement).toBeInTheDocument();
  });

  test('should render with props correctly', () => {
    const name = 'Prakash';
    render(<Profile name={name} />);
    const divElement = screen.getByText(/Private Profile Component. Name is Prakash/);
    expect(divElement).toBeInTheDocument();
  });
});
