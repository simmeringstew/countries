import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import BorderCountry from "../components/BorderCountry";

test("Correct country name is rendered", () => {
    const country = {
        name: "Belgium",
        id: 1
    };
    render(
        <MemoryRouter>
            <BorderCountry country={country} />
        </MemoryRouter>
    );
    const link = screen.getByRole("link");
    expect(link.textContent).toMatch(/belgium/i);
});

test("Clicking the link triggers the on click", () => {
    const country = {
        name: "Belgium",
        id: 1
    };
    const onClick = jest.fn();
    render(
        <MemoryRouter>
            <BorderCountry country={country} updateCountry={onClick} />
        </MemoryRouter>
    );
    const link = screen.getByRole("link");
    userEvent.click(link);
    expect(onClick).toHaveBeenCalledTimes(1);
});

test("Correct country information is passed on onClick", () => {
    const country = {
        name: "Belgium",
        id: 1
    };
    const onClick = jest.fn();
    render(
        <MemoryRouter>
            <BorderCountry country={country} updateCountry={onClick} />
        </MemoryRouter>
    );
    const link = screen.getByRole("link");
    userEvent.click(link);
    expect(onClick.mock.calls[0][0].name).toBe("Belgium");
    expect(onClick.mock.calls[0][0].region).toBe("Europe");
    expect(onClick.mock.calls[0][0].subregion).toBe("Western Europe");
});
