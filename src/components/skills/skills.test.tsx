import { render, screen } from '@testing-library/react';
import { Skills } from './skills';

describe('Skills', () => {
  const skills = ['HTML', 'CSS', 'Javascript'];

  test('renders correctly', () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole('list');
    expect(listElement).toBeInTheDocument();
  });

  test('renders a list of skills', () => {
    render(<Skills skills={skills} />);
    const listItemElements = screen.getAllByRole('listitem');
    expect(listItemElements).toHaveLength(skills.length);
  });

  test('renders Login button', () => {
    render(<Skills skills={skills} />);
    const loginButton = screen.getByRole('button', {
      name: 'Login',
    });
    expect(loginButton).toBeInTheDocument();
  });

  test('does not render Start learning button', () => {
    render(<Skills skills={skills} />);
    const startLearningButton = screen.queryByRole('button', {
      name: 'Start Learning',
    });

    expect(startLearningButton).not.toBeInTheDocument();
  });

  test('renders Start Learning button after a delay', async () => {
    render(<Skills skills={skills} />);
    const startLearningButton = await screen.findByRole(
      'button',
      {
        name: 'Start Learning',
      },
      {
        timeout: 2000,
      }
    );

    expect(startLearningButton).toBeInTheDocument();
  });
});
