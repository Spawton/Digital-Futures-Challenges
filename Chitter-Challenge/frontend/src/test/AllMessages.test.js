import { render, screen } from "@testing-library/react";
import AllMessages from "../components/homepage/AllMessages.jsx";
import { MemoryRouter } from "react-router-dom";
import peep from "../test/testData/peep.json";

describe("Display Peeps Tests", () => {
    beforeEach(() => {
        render(
            <MemoryRouter>
                <AllMessages messageProp={peep.peeps} />
            </MemoryRouter>
        );
    });
    describe("Checking the Peep Data Rendered correctly", () => {
        it("should show correct name", () => {
            expect(screen.getByText("test1")).toBeInTheDocument;
        });

        it("should show correct username", () => {
            expect(screen.getByText("@Test1")).toBeInTheDocument;
        });
        it("should show correct message", () => {
            expect(screen.getByText("First Peep")).toBeInTheDocument;
        });
    });
});