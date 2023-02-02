import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import TopBar from "../components/TopBar";

test("Correct mode is displayed when in light mode", () => {
    const mode = "Dark Mode";
    render(
        <MemoryRouter>
            <TopBar mode={mode} />
        </MemoryRouter>
    );
    const text = screen.getByTestId("mode");
    expect(text.textContent).toBe("Dark Mode");
});

test("Correct mode is displayed when in dark mode", () => {
    const mode = "Light Mode";
    render(
        <MemoryRouter>
            <TopBar mode={mode} />
        </MemoryRouter>
    );
    const text = screen.getByTestId("mode");
    expect(text.textContent).toBe("Light Mode");
});

test("Clicking button calls on click function", () => {
    const onClick = jest.fn();
    render(
        <MemoryRouter>
            <TopBar updateMode={onClick} />
        </MemoryRouter>
    );
    const button = screen.getByRole("button");
    userEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
});

test("Correct info is passed on click function", () => {
    const mode = "Dark Mode";
    const onClick = jest.fn();
    render(
        <MemoryRouter>
            <TopBar mode={mode} updateMode={onClick} />
        </MemoryRouter>
    );
    const button = screen.getByRole("button");
    userEvent.click(button);
    expect(onClick.mock.calls[0][0]).toBe("Light Mode");
});
