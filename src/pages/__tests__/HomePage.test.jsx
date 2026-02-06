import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HomePage from '../HomePage';

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('HomePage', () => {
  test('renders Hero section content', () => {
    renderWithRouter(<HomePage />);

    // Check Hero Content
    expect(screen.getByText('Welcome to My Online Store')).toBeInTheDocument();
    expect(screen.getByText('Best deals every day')).toBeInTheDocument();
    expect(screen.getByText('Shop Now')).toBeInTheDocument();
  });

  test('renders "Why Shop With Us?" section', () => {
    renderWithRouter(<HomePage />);

    // Check home-intro
    expect(screen.getByText('Why Shop With Us?')).toBeInTheDocument();
    expect(screen.getByText(/We offer high-quality tech products at competitive prices/i)).toBeInTheDocument();
    expect(screen.getByText(/Our goal is to make your online shopping experience simple, fast, and enjoyable/i)).toBeInTheDocument();
  });
});
