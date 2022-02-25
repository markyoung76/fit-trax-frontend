import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Nav from './index';

describe('Nav', () => {
  test('it loads and displays nav', () => {
    render(<Nav />);
  });

  test('it should render the logo', () => {
    render(<Nav />);

    const logo = screen.getByAltText('fit_trax_app_logo');

    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', 'fit_trax_app_logo_lightmode.png');
  });

  test('it should render the avatar and when clicked show the drawer', () => {
    render(<Nav />);

    const avatar = screen.getByTestId('avatar');
    expect(avatar).toBeInTheDocument();

    userEvent.click(avatar);
    expect(screen.getByRole('presentation')).toBeVisible();
  });

  test("it should render the drawer's title", () => {
    render(<Nav />);

    userEvent.click(screen.getByTestId('avatar'));
    expect(screen.getByText('User Account')).toBeInTheDocument();
  });

  test('it should render the username label in the drawer', () => {
    render(<Nav />);

    userEvent.click(screen.getByTestId('avatar'));
    expect(screen.getByLabelText('Username')).toBeInTheDocument();
  });

  test('it should render the age label in the drawer', () => {
    render(<Nav />);

    userEvent.click(screen.getByTestId('avatar'));
    expect(screen.getByLabelText('Age')).toBeInTheDocument();
  });

  test('it should render the gender label in the drawer', () => {
    render(<Nav />);

    userEvent.click(screen.getByTestId('avatar'));
    expect(screen.getByLabelText('Gender')).toBeInTheDocument();
  });

  test('it should render the level of fitness label in the drawer', () => {
    render(<Nav />);

    userEvent.click(screen.getByTestId('avatar'));
    expect(screen.getByLabelText('Level of fitness')).toBeInTheDocument();
  });

  test('it should close the drawer on save', () => {
    render(<Nav />);

    userEvent.click(screen.getByTestId('avatar'));
    userEvent.click(screen.getByText('Save'));

    expect(screen.getByRole('presentation', { hidden: true })).toBeTruthy();
  });

  test('it should close the drawer on cancel', () => {
    render(<Nav />);

    userEvent.click(screen.getByTestId('avatar'));
    userEvent.click(screen.getByText('Cancel'));

    expect(screen.getByRole('presentation', { hidden: true })).toBeTruthy();
  });
});
