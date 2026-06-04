import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

const renderHeader = () =>
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>,
  );

describe('Header', () => {
  it('renders the primary navigation links', () => {
    renderHeader();
    for (const label of ['Home', 'Services', 'Software', 'About', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument();
    }
  });

  it('toggles the mobile menu open and closed', async () => {
    const user = userEvent.setup();
    renderHeader();
    const toggle = screen.getByRole('button', { name: /open menu/i });
    expect(toggle).toHaveAttribute('aria-expanded', 'false');

    await user.click(toggle);
    expect(screen.getByRole('button', { name: /close menu/i })).toHaveAttribute('aria-expanded', 'true');
  });
});
