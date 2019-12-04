import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import IDScanner from './IDScanner';

test('defaults to locked and does not have key card', () => {
    const scanner = render(<IDScanner/>)
    scanner.getByText(/locked/i);
    scanner.getByText(/insert key card/i);
})

test('displays if entry is unlocked', () => {
    const scanner = render(<IDScanner locked={false} hasKeyCard={true}/>)
    scanner.getByText(/unlocked/i);
    scanner.getByText(/remove key card/i);
})

test('button contains locked class when locked', () => {
    const scanner = render(<IDScanner locked={true} hasKeyCard={false}/>);
    const lock = scanner.getByText(/locked/i);
    expect(lock.classList.contains('locked')).toBe(true);
})