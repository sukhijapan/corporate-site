import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Contact from './Contact';
import * as contactApi from '../config/contact';

const renderContact = () =>
  render(
    <MemoryRouter>
      <Contact />
    </MemoryRouter>,
  );

describe('Contact page', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('shows validation errors and does not submit when fields are empty', async () => {
    const user = userEvent.setup();
    const spy = vi.spyOn(contactApi, 'submitContact').mockResolvedValue();
    renderContact();

    await user.click(screen.getByRole('button', { name: /send message/i }));

    expect(await screen.findByText(/please enter your name/i)).toBeInTheDocument();
    expect(spy).not.toHaveBeenCalled();
  });

  it('submits a valid form and shows the success state', async () => {
    const user = userEvent.setup();
    const spy = vi.spyOn(contactApi, 'submitContact').mockResolvedValue();
    renderContact();

    await user.type(screen.getByLabelText(/full name/i), 'Jane Builder');
    await user.type(screen.getByLabelText(/email address/i), 'jane@example.com');
    await user.type(
      screen.getByLabelText(/how can we help/i),
      'We would like a demo of ITPapp for our next project.',
    );
    await user.click(screen.getByRole('button', { name: /send message/i }));

    expect(await screen.findByText(/thank you/i)).toBeInTheDocument();
    expect(spy).toHaveBeenCalledOnce();
  });

  it('shows an error banner when submission fails', async () => {
    const user = userEvent.setup();
    vi.spyOn(contactApi, 'submitContact').mockRejectedValue(new Error('Network down'));
    renderContact();

    await user.type(screen.getByLabelText(/full name/i), 'Jane Builder');
    await user.type(screen.getByLabelText(/email address/i), 'jane@example.com');
    await user.type(
      screen.getByLabelText(/how can we help/i),
      'We would like a demo of ITPapp for our next project.',
    );
    await user.click(screen.getByRole('button', { name: /send message/i }));

    await waitFor(() => expect(screen.getByRole('alert')).toHaveTextContent(/network down/i));
  });
});
