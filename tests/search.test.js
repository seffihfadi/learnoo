import { render, screen } from '@testing-library/react';
import Search from './Search';
import NotFound from '@/app/not-found';

// Mock the `getDataAction` function
jest.mock('@/actions/getActions', () => ({
  getDataAction: jest.fn(),
}));

// Mock the `getTranslations` hook
jest.mock('next-intl/server', () => ({
  getTranslations: jest.fn(),
}));

// Mock the `SearchFilters` component
jest.mock('@/components/custom/search-filters', () => () => <div>SearchFilters</div>);

// Mock the `LazyImage` component
jest.mock('@/components/custom/lazy-image', () => () => <div>LazyImage</div>);

describe('Search Component', () => {
  const mockData = {
    count: 2,
    current_page: 1,
    max_pages: 1,
    courses: [
      {
        id: 1,
        title: 'React Course',
        description: 'Learn React from scratch',
        rate: 4.5,
        raters_count: 100,
        level: 'beginner',
        duration: 120,
        image: {
          url: '/imgs/react.jpg',
          thumbnail_url: '/imgs/react-thumb.jpg',
          width: 1000,
          height: 1000,
        },
        author: {
          user: {
            id: 1,
            full_name: 'John Doe',
          },
        },
      },
      {
        id: 2,
        title: 'Node.js Course',
        description: 'Learn Node.js from scratch',
        rate: 4.7,
        raters_count: 150,
        level: 'intermediate',
        duration: 180,
        image: {
          url: '/imgs/node.jpg',
          thumbnail_url: '/imgs/node-thumb.jpg',
          width: 1000,
          height: 1000,
        },
        author: {
          user: {
            id: 2,
            full_name: 'Jane Doe',
          },
        },
      },
    ],
  };

  const mockSearchParams = {
    title: 'React',
    level: 'beginner',
    duration: '2',
    rate: '4',
    categories: 'programming',
  };

  // Mock translations
  const mockTranslations = {
    'SearchPage.filterBy': 'Filter By',
    'SearchPage.reviews': 'reviews',
    'SearchPage.h': 'h',
    'SearchPage.noCourses': 'No courses found',
  };

  beforeEach(() => {
    // Mock getTranslations to return the mock translations
    require('next-intl/server').getTranslations.mockResolvedValue((key) => mockTranslations[key]);

    // Mock getDataAction to return the mock data
    require('@/actions/getActions').getDataAction.mockResolvedValue(mockData);
  });

  // Test 1: Renders the component with data
  test('renders the component with data', async () => {
    render(<Search searchParams={mockSearchParams} />);

    // Check if the component renders correctly
    await screen.findByText('Filter By'); // Ensure translations are loaded
    expect(screen.getByText('React Course')).toBeInTheDocument();
    expect(screen.getByText('Node.js Course')).toBeInTheDocument();
    expect(screen.getByText('Learn React from scratch')).toBeInTheDocument();
    expect(screen.getByText('Learn Node.js from scratch')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Doe')).toBeInTheDocument();
  });

  // Test 2: Displays the NotFound component when no data is returned
  test('displays NotFound component when no data is returned', async () => {
    // Mock getDataAction to return null
    require('@/actions/getActions').getDataAction.mockResolvedValue(null);

    render(<Search searchParams={mockSearchParams} />);

    // Check if the NotFound component is rendered
    const notFoundComponent = await screen.findByText('Not Found');
    expect(notFoundComponent).toBeInTheDocument();
  });

  // Test 3: Displays "No courses found" when the courses array is empty
  test('displays "No courses found" when the courses array is empty', async () => {
    // Mock getDataAction to return an empty courses array
    require('@/actions/getActions').getDataAction.mockResolvedValue({
      count: 0,
      current_page: 1,
      max_pages: 1,
      courses: [],
    });

    render(<Search searchParams={mockSearchParams} />);

    // Check if the "No courses found" message is displayed
    const noCoursesMessage = await screen.findByText('No courses found');
    expect(noCoursesMessage).toBeInTheDocument();
  });

  // Test 4: Renders the SearchFilters component
  test('renders the SearchFilters component', async () => {
    render(<Search searchParams={mockSearchParams} />);

    // Check if the SearchFilters component is rendered
    const searchFilters = await screen.findByText('SearchFilters');
    expect(searchFilters).toBeInTheDocument();
  });
});