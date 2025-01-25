import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SigninForm from './SigninForm';

// Mock the `signinAction` function
jest.mock('@/actions/userActions', () => ({
  signinAction: jest.fn(),
}));

// Mock the `useTranslations` hook
jest.mock('next-intl', () => ({
  useTranslations: () => (key) => {
    const translations = {
      'Auth.email': 'Email',
      'Auth.password': 'Password',
      'Auth.register': 'Register',
      'Auth.submit': 'Submit',
      'Auth.submiting': 'Submitting...',
    };
    return translations[key];
  },
}));

describe('SigninForm Component', () => {
  // Test 1: Renders the form and its inputs
  test('renders the form with all inputs and labels', () => {
    render(<SigninForm />);

    // Check if the form inputs and labels are rendered
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByText('Register')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });

  // Test 2: Displays error messages when state contains errors
  test('displays error messages when state contains errors', () => {
    const mockState = {
      success: false,
      error: 'Invalid email or password',
      email: 'Email is required',
      password: 'Password is required',
    };

    // Mock the useActionState hook to return the mock state
    jest.mock('react', () => ({
      ...jest.requireActual('react'),
      useActionState: () => [mockState, jest.fn(), false],
    }));

    render(<SigninForm />);

    // Check if error messages are displayed
    expect(screen.getByText('Invalid email or password')).toBeInTheDocument();
    expect(screen.getByText('Email is required')).toBeInTheDocument();
    expect(screen.getByText('Password is required')).toBeInTheDocument();
  });

  // Test 3: Submits the form and calls signinAction
  test('submits the form and calls signinAction', async () => {
    const mockSigninAction = jest.fn(() => Promise.resolve({ success: true }));
    jest.mock('@/actions/userActions', () => ({
      signinAction: mockSigninAction,
    }));

    render(<SigninForm />);

    // Fill out the form
    await userEvent.type(screen.getByLabelText('Email'), 'test@example.com');
    await userEvent.type(screen.getByLabelText('Password'), 'password123');

    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));

    // Check if signinAction was called with the correct data
    await waitFor(() => {
      expect(mockSigninAction).toHaveBeenCalledWith(
        expect.any(FormData) // FormData contains the email and password
      );
    });
  });

  // Test 4: Disables the submit button when isPending is true
  test('disables the submit button when isPending is true', () => {
    // Mock the useActionState hook to return isPending as true
    jest.mock('react', () => ({
      ...jest.requireActual('react'),
      useActionState: () => [null, jest.fn(), true],
    }));

    render(<SigninForm />);

    // Check if the submit button is disabled
    expect(screen.getByRole('button', { name: 'Submitting...' })).toBeDisabled();
  });
});