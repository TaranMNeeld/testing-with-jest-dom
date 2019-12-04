import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Entry from './Entry';

test('Entry renders correctly', () => {
    const entry = render(<Entry/>);
    expect(entry).toMatchSnapshot();
})

test('cannot be opened if it is locked', () => {
    const entry = render(<Entry locked={true} hasKeyCard={false}/>)
    const openButton = entry.getByTestId(/open-button/i);
    expect(openButton).not.toBeEnabled();
})