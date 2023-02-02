import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import CountryCard from "../components/CountryCard";

test("Correct country information is rendered", () => {
    const country = {
        name: "Belgium",
        population: 11555997,
        region: "Europe",
        capital: "Brussels",
        flags: {
            svg: "./belgium.svg"
        }
    };
    render(
        <MemoryRouter>
            <CountryCard country={country} />
        </MemoryRouter>
    );
    const image = screen.getByRole("img");
    const name = screen.getByRole("heading", { level: 2 });
    const population = screen.getByTestId("country-card-population");
    const region = screen.getByTestId("country-card-region");
    const capital = screen.getByTestId("country-card-capital");
    expect(image.src).toBe("http://localhost/belgium.svg");
    expect(image.alt).toBe("Belgium");
    expect(name.textContent).toMatch(/belgium/i);
    expect(population.textContent).toBe("Population: 11,555,997");
    expect(region.textContent).toMatch(/region: europe/i);
    expect(capital.textContent).toMatch(/capital: brussels/i);
});

test("Cliking the link calls the on click handler", () => {
    const country = {
        name: "Belgium",
        population: 11555997,
        region: "Europe",
        capital: "Brussels",
        flags: {
            svg: "./belgium.svg"
        }
    };
    const onClick = jest.fn();
    render(
        <MemoryRouter>
            <CountryCard country={country} updateCountry={onClick} />
        </MemoryRouter>
    );
    const link = screen.getByRole("link");
    userEvent.click(link);
    expect(onClick).toHaveBeenCalledTimes(1);
});

test("Correct information is passed when link is clicked", () => {
    const country = {
        name: "Belgium",
        population: 11555997,
        region: "Europe",
        capital: "Brussels",
        flags: {
            svg: "./belgium.svg"
        }
    };
    const onClick = jest.fn();
    render(
        <MemoryRouter>
            <CountryCard country={country} updateCountry={onClick} />
        </MemoryRouter>
    );
    const link = screen.getByRole("link");
    userEvent.click(link);
    expect(onClick.mock.calls[0][0].name).toBe("Belgium");
    expect(onClick.mock.calls[0][0].region).toBe("Europe");
    expect(onClick.mock.calls[0][0].capital).toBe("Brussels");
});
