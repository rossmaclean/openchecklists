import React, { render } from '@testing-library/react';
import Checklists from './Checklists';

test('renders learn react link', () => {
  render(<Checklists />);
  // const linkElement = screen.getByText(/checklist/i);
  // expect(linkElement).toBeInTheDocument();
});
