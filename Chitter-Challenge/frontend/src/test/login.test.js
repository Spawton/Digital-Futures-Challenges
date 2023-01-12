import { render, screen } from "@testing-library/react";
import Login from "../components/login/login.jsx";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

describe("Login Form tests", () => {
    const mockloginHandler = jest.fn();
    const response = "success";

    beforeEach(() => {
        render(<MemoryRouter><Login /></MemoryRouter>);
    });

    describe("Initial Render and Form Input Tests", () => {
    });
    it("should render Password Input type in the form", () => {
        expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();
    });
    it("should render UserName Input type in the form", () => {
        const testEmail = `test@email.com`;
        const emailInput = screen.getByPlaceholderText("Email");
        userEvent.type(emailInput, testEmail);
        expect(emailInput).toHaveValue(testEmail);
    });
    it("should render the username value when typed", () => {
        const testName = `test`;
        const nameInput = screen.getByPlaceholderText("Email");
        userEvent.type(nameInput, testName);
        expect(nameInput).toHaveValue(testName);
    });
    it("should render the password value when typed", () => {
        const testPassword = `password`;
        const passwordInput = screen.getByPlaceholderText("Password");
        userEvent.type(passwordInput, testPassword);
        expect(passwordInput).toHaveValue(testPassword);
    });
});