import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './app';

describe('App', () => {
  it('renders the main heading and subheading', () => {
    render(<App />);
    expect(screen.getByText('Build Better. Build Faster.')).toBeInTheDocument();
    expect(screen.getByText('Vitkd')).toBeInTheDocument();
    expect(screen.getByText('— The Future of Web Development')).toBeInTheDocument();
  });

  it('renders all feature cards with correct content', () => {
    render(<App />);
    const features = [
      'Lightning Fast',
      'Modern React',
      'Type Safety',
      'Beautiful Design',
      'Code Quality',
      'Perfect Formatting',
      'Scalable Architecture',
      'Clean Imports'
    ];

    features.forEach(feature => {
      expect(screen.getByText(feature)).toBeInTheDocument();
    });
  });

  it('renders the GitHub button with correct link', () => {
    render(<App />);
    const button = screen.getByText('Get Started on GitHub');
    expect(button).toBeInTheDocument();
    expect(button.closest('a')).toHaveAttribute('href', 'https://github.com/imkuldeepahlawat/vitkd');
  });

  it('renders the copy button with correct command', () => {
    render(<App />);
    const copyButton = screen.getByText('npx degit imkuldeepahlawat/vitkd my-vitkd-app');
    expect(copyButton).toBeInTheDocument();
  });

  it('renders the footer with correct content', () => {
    render(<App />);
    const footer = screen.getByText(/Crafted with ❤️ by Kuldeep Ahlawat/);
    expect(footer).toBeInTheDocument();
    expect(footer.closest('a')).toHaveAttribute('href', 'https://github.com/imkuldeepahlawat');
  });

  it('renders the description text', () => {
    render(<App />);
    expect(screen.getByText(/A modern React template that combines the best tools and practices/)).toBeInTheDocument();
    expect(screen.getByText(/Ready to ship. Zero configuration. Maximum productivity/)).toBeInTheDocument();
  });

  it('renders the Vite logo', () => {
    render(<App />);
    const viteLogo = document.querySelector('svg');
    expect(viteLogo).toBeInTheDocument();
  });
}); 