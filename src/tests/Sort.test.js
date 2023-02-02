import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Sort from "../components/Sort";

test("Typing calls the on chage function", () => {
    const onChange = jest.fn();
    render(
        <MemoryRouter>
            <Sort nameSort={onChange} />
        </MemoryRouter>
    );
    const search = screen.getByRole("textbox");
    userEvent.type(search, "belgium");
    expect(onChange).toHaveBeenCalledTimes(7);
});

test("Typing sends the correct information", () => {
    const onChange = jest.fn();
    render(
        <MemoryRouter>
            <Sort nameSort={onChange} />
        </MemoryRouter>
    );
    const search = screen.getByRole("textbox");
    userEvent.type(search, "belgium");
    expect(onChange.mock.calls[0][0]).toBe("b");
    expect(onChange.mock.calls[6][0]).toBe("belgium");
});

test("Changing selection calls the function", () => {
    const onChange = jest.fn();
    render(
        <MemoryRouter>
            <Sort filter={onChange} />
        </MemoryRouter>
    );
    userEvent.selectOptions(screen.getByRole("combobox"), "Africa");
    expect(onChange).toHaveBeenCalledTimes(1);
});

test("Changing selection sends the correct information", () => {
    const onChange = jest.fn();
    render(
        <MemoryRouter>
            <Sort filter={onChange} />
        </MemoryRouter>
    );
    userEvent.selectOptions(screen.getByRole("combobox"), "Africa");
    expect(onChange.mock.calls[0][0]).toBe("Africa");
});
