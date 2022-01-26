import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup);

describe('Contact renders', () => {
    it('renders', () => {
        render(<Contact />);
    })

    it('matches snapshot', () => {
        const {asFragment} = render(<Contact />);
        expect(asFragment()).toMatchSnapshot();
    })

    it('renders h1', () => {
        const { getByTestId } = render(<Contact />);
        expect(getByTestId('contact-h1')).toHaveTextContent('Contact me');
    })

    it('renders submit', () => {
        const { getByTestId } = render(<Contact />);
        expect(getByTestId('contact-submit')).toHaveTextContent('Submit');
    })
})