import { render } from '@testing-library/react';
import Header from '../Components/Header';
import { BrowserRouter as Router } from "react-router-dom";

describe('Header tests', () => {
    it(`Header matches snapshot`, () => {
        const headerComponent = render(<Router><Header /></Router>);

        expect(headerComponent).toMatchSnapshot();
    });
})