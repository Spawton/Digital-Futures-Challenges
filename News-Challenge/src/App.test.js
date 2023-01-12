import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App.js';

describe("App snapshot test", () => {

  it('renders DFX News text', () => {
    render(<App />);
    const textElement = screen.getByText(/DFX News/i);
    expect(textElement).toBeInTheDocument();
  });

  it("App component renders correctly", () => {
    const appComponent = render(<App />);
    expect(appComponent).toBeTruthy();
  });
});
