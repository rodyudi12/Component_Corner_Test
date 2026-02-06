import { render, screen } from '@testing-library/react';
import { describe, test, expect, beforeEach, afterEach, vi } from 'vitest';
import App from './App';

describe('App', () => {
  beforeEach(() => {
    vi.spyOn(Storage.prototype, 'getItem').mockReturnValue(null);
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  test('renders header and footer', () => {
    render(<App />);

    expect(
      screen.getByText(/rodrigo's online store/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/contact us: support@mystore.com/i)
    ).toBeInTheDocument();
  });

  test('loads cart from localStorage on initial render', () => {
    const mockCart = [
      { id: 1, name: 'Wireless Headphones', price: 99.99 },
      { id: 2, name: 'Smart Watch', price: 249.99 },
    ];

    Storage.prototype.getItem.mockReturnValueOnce(
      JSON.stringify(mockCart)
    );

    render(<App />);

    expect(Storage.prototype.getItem).toHaveBeenCalledWith('cart');
    expect(screen.getByText('2')).toBeInTheDocument();
  });

  test('saves cart to localStorage when cart changes', () => {
    render(<App />);

    expect(Storage.prototype.setItem).toHaveBeenCalledWith(
      'cart',
      JSON.stringify([])
    );
  });
});
