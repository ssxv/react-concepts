import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Interview from './Interview';

test('renders Interview', () => {
    render(<Interview />);

    expect(
        screen.getByText('React Testing Library Interview')
    ).toBeInTheDocument();
    expect(
        screen.getByText('Describe your experience with React Testing Library:')
    ).toBeInTheDocument();
    expect(
        screen.getByText(
            'What other tools or libraries do you use for testing React applications?'
        )
    ).toBeInTheDocument();
});
