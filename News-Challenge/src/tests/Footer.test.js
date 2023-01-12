import { render } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";
import Footer from '../components/Footer';

describe('Footer tests', () => {
    test(`Footer matches snapshot`, () => {
        const footerComponent = render(<Router><Footer /></Router>);

        expect(footerComponent).toMatchSnapshot();
    });
})