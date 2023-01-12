import { render, screen } from "@testing-library/react";
import Signup from "../Components/signUp/signUp.jsx";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

describe("Signup Form tests", () => {
    const mocksignupHandler = jest.fn();
    const response = "success";

    beforeEach(() => {
        render(
            <MemoryRouter>
                <Signup signupHandler={mocksignupHandler} response={response} />
            </MemoryRouter>
        );
    });
    describe("Initial Render and Form Input Tests", () => {
        it("should render display text input type in the form", () => {
            expect(screen.getByText(/Create your account. It's free and only takes a minute/i)).toBeInTheDocument();
        });
        it("should render display text input type in the form", () => {
            expect(screen.getByText(/Already have an account?/i)).toBeInTheDocument();
        });
    });
    describe("Test SignUp Forms Input", () => {
        it("should render the username value when typed", () => {
            const testUsername = `testuser`;
            const usernameInput = screen.getByPlaceholderText(/Username/i);
            userEvent.type(usernameInput, testUsername);
            expect(usernameInput).toHaveValue(testUsername);
        });
        it("should render the Email value when typed", () => {
            const testEmail = `testemail`;
            const emailInput = screen.getByPlaceholderText("Email");
            userEvent.type(emailInput, testEmail);
            expect(emailInput).toHaveValue(testEmail);
        });
        it("should render the password value when typed", () => {
            const testPassword = `password`;
            const passwordInput = screen.getByPlaceholderText("Password");
            userEvent.type(passwordInput, testPassword);
            expect(passwordInput).toHaveValue(testPassword);
        });
    });
});