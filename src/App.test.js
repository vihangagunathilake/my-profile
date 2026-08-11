import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio and commercial projects', () => {
  render(<App />);
  const headingElement = screen.getByText(/Featured Projects/i);
  expect(headingElement).toBeInTheDocument();
  
  expect(screen.getByText(/TS Queue/i)).toBeInTheDocument();
  expect(screen.getByText(/Feedback Application/i)).toBeInTheDocument();
  expect(screen.getByText(/Appointment Booking Platform/i)).toBeInTheDocument();
  expect(screen.getByText(/People Counting Solution/i)).toBeInTheDocument();
});

