import { render, screen } from '@testing-library/react';
import { Status } from './Status';

describe('Status', () => {
  test('renders correctly', () => {
    render(<Status status="loading" />);
    const headingElement = screen.getByRole('heading');
    expect(headingElement).toBeInTheDocument();
  });

  test('renders correctly and shows loading', () => {
    render(<Status status="loading" />);
    const headingElement = screen.getByRole('heading');
    expect(headingElement.textContent).toContain('Status - Loading...');
  });

  test('renders correctly and shows loading', () => {
    render(<Status status="success" />);
    const headingElement = screen.getByRole('heading');
    expect(headingElement.textContent).toContain(
      'Status - Data fetched successfully'
    );
  });

  test('renders correctly and shows loading', () => {
    render(<Status status="error" />);
    const headingElement = screen.getByRole('heading');
    expect(headingElement.textContent).toContain(
      'Status - Error fetching data'
    );
  });
});
