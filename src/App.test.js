import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio and commercial projects', () => {
  render(<App />);
  const headingElement = screen.getByText(/Featured Projects/i);
  expect(headingElement).toBeInTheDocument();
  
  expect(screen.getByText('Enterprise Queue Management Platform')).toBeInTheDocument();
  expect(screen.getByText('Feedback Solution — Customer Feedback & Analytics Platform')).toBeInTheDocument();
  expect(screen.getByText(/People Counting Solution/i)).toBeInTheDocument();
});

