import { render } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from '../components/Header/Header.jsx';

describe('Header tests', () => {
    it(`Header matches snapshot`, () => {
        const headerComponent = render(<Router><Header /></Router>);

        expect(headerComponent).toMatchSnapshot();
    });
})