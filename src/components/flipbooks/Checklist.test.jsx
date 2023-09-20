import React, { render } from '@testing-library/react';
import Checklist from './Checklist';

test('renders learn react link', () => {
  render(<Checklist />);
  // const linkElement = screen.getByText(/checklist/i);
  // expect(linkElement).toBeInTheDocument();
});
