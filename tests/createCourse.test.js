import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CreateCourse from './CreateCourse';

// Mock the `createCourseAction` function
jest.mock('@/actions/courseActions', () => ({
  createCourseAction: jest.fn(() => Promise.resolve({ success: true })),
}));

describe('CreateCourse Component', () => {
  // Test 1: Renders the form and its inputs
  test('renders the form with all inputs and labels', () => {
    render(<CreateCourse />);

    // Check if the form inputs are rendered
    expect(screen.getByPlaceholderText('JavaScript Programming with React')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi est voluptates odit expedita quod quasi labore quia doloremque quae recusandae doloribus delectus deserunt ab voluptas quo, explicabo officia facere praesentium')).toBeInTheDocument();
    expect(screen.getByLabelText('Price')).toBeInTheDocument();
    expect(screen.getByLabelText('Level')).toBeInTheDocument();
    expect(screen.getByLabelText('Language')).toBeInTheDocument();
    expect(screen.getByLabelText('Duration')).toBeInTheDocument();
    expect(screen.getByText('Create')).toBeInTheDocument();
  });

  // Test 2: Handles image file upload
  test('allows user to upload an image file', async () => {
    render(<CreateCourse />);

    // Create a fake image file
    const file = new File(['test-image'], 'test.png', { type: 'image/png' });

    // Get the file input and upload the file
    const fileInput = screen.getByTestId('image-upload-input');
    await userEvent.upload(fileInput, file);

    // Check if the image is displayed
    await waitFor(() => {
      expect(screen.getByAltText('')).toBeInTheDocument(); // Image is displayed
    });
  });

  // Test 3: Handles video file upload
  test('allows user to upload a video file', async () => {
    render(<CreateCourse />);

    // Create a fake video file
    const file = new File(['test-video'], 'test.mp4', { type: 'video/mp4' });

    // Get the file input and upload the file
    const fileInput = screen.getByTestId('video-upload-input');
    await userEvent.upload(fileInput, file);

    // Check if the video is displayed
    await waitFor(() => {
      expect(screen.getByRole('video')).toBeInTheDocument(); // Video is displayed
    });
  });

  // Test 4: Submits the form with valid data
  test('submits the form with valid data', async () => {
    render(<CreateCourse />);

    // Fill out the form
    await userEvent.type(screen.getByPlaceholderText('JavaScript Programming with React'), 'Test Course');
    await userEvent.type(screen.getByPlaceholderText('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi est voluptates odit expedita quod quasi labore quia doloremque quae recusandae doloribus delectus deserunt ab voluptas quo, explicabo officia facere praesentium'), 'This is a test course description.');
    await userEvent.type(screen.getByLabelText('Price'), '100');
    await userEvent.selectOptions(screen.getByLabelText('Level'), 'beginner');
    await userEvent.selectOptions(screen.getByLabelText('Language'), 'en');
    await userEvent.type(screen.getByLabelText('Duration'), '10');

    // Submit the form
    fireEvent.click(screen.getByText('Create'));

    // Check if the form submission was successful
    await waitFor(() => {
      expect(createCourseAction).toHaveBeenCalledWith(expect.any(FormData));
    });
  });
});