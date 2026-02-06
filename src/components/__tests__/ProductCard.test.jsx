import { render, screen, fireEvent } from '@testing-library/react';
import ProductCard from '../ProductCard'; // Adjust the path as necessary

// Mock the addToCart function for testing using Vitest
const mockAddToCart = vi.fn();

describe('ProductCard', () => {
  // Default props for the test
  const defaultProps = {
    name: 'Wireless Headphones',
    price: '$99.99',
    description: 'Premium noise-cancelling headphones with 30-hour battery life',
    image: '/path/to/image.jpg',
    addToCart: mockAddToCart,
  };

  test('renders without crashing', () => {
    render(<ProductCard {...defaultProps} />);
  });

  test('displays product information correctly', () => {
    render(<ProductCard {...defaultProps} />);

    // Check if the product name is displayed
    expect(screen.getByText('Wireless Headphones')).toBeInTheDocument();

    // Check if the product price is displayed
    expect(screen.getByText('$99.99')).toBeInTheDocument();

    // Check if the product description is displayed
    expect(screen.getByText('Premium noise-cancelling headphones with 30-hour battery life')).toBeInTheDocument();

    // Check if the image is displayed with the correct alt text
    const img = screen.getByAltText('Wireless Headphones');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/path/to/image.jpg');
  });

  test('contains an "Add to Cart" button', () => {
    render(<ProductCard {...defaultProps} />);

    // Check if the "Add to Cart" button exists
    const button = screen.getByRole('button', { name: /add to cart/i });
    expect(button).toBeInTheDocument();

    // Simulate a click event on the "Add to Cart" button
    fireEvent.click(button);

    // Check if the addToCart function was called with the correct arguments
    expect(mockAddToCart).toHaveBeenCalledWith('Wireless Headphones', '$99.99', '/path/to/image.jpg', 'Premium noise-cancelling headphones with 30-hour battery life');
  });
});
