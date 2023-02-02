import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import SpecificCountry from "../components/SpecificCountry";

test("Correct information is rendered to page", () => {
    const country = {
        name: "Belgium",
        nativeName: "België",
        population: 11555997,
        region: "Europe",
        subregion: "Western Europe",
        capital: "Brussels",
        topLevelDomain: ".be",
        currencies: [
            {name: "Euro"}
        ],
        languages: [
            {name: "Dutch"}, {name: "French"}, {name: "German"}
        ],
        flags: {svg: "./belgium"},
        "borders": ["FRA", "DEU", "LUX", "NLD"],
    };
    render(
        <MemoryRouter>
            <SpecificCountry country={country} />
        </MemoryRouter>
    );
    const image = screen.getByRole("img");
    const name = screen.getByRole("heading", { level: 2 });
    const nativeName = screen.getByTestId("nativeName");
    const population = screen.getByTestId("population");
    const region = screen.getByTestId("region");
    const subRegion = screen.getByTestId("subRegion");
    const capital = screen.getByTestId("capital");
    const topLevelDomain = screen.getByTestId("topLevelDomain");
    const currencies = screen.getByTestId("currencies");
    const languages = screen.getByTestId("languages");
    const borderSection = screen.getByText("Border Countries:");
    expect(image.alt).toBe("Belgium");
    expect(name.textContent).toBe("Belgium");
    expect(nativeName.textContent).toBe("Native Name: België");
    expect(population.textContent).toBe("Population: 11,555,997");
    expect(region.textContent).toBe("Region: Europe");
    expect(subRegion.textContent).toBe("Sub Region: Western Europe");
    expect(capital.textContent).toBe("Capital: Brussels");
    expect(topLevelDomain.textContent).toBe("Top Level Domain: .be");
    expect(currencies.textContent).toBe("Currencies: Euro");
    expect(languages.textContent).toBe("Languages: Dutch, French, German");
    expect(borderSection).toBeInTheDocument();
});

test("A country with no bordering countries does not render the border country section", () => {
    const country = {
        name: "Belgium",
        nativeName: "België",
        population: 11555997,
        region: "Europe",
        subregion: "Western Europe",
        capital: "Brussels",
        topLevelDomain: ".be",
        currencies: [
            {name: "Euro"}
        ],
        languages: [
            {name: "Dutch"}, {name: "French"}, {name: "German"}
        ],
        flags: {svg: "./belgium"},
    };
    render(
        <MemoryRouter>
            <SpecificCountry country={country} />
        </MemoryRouter>
    );
    const borderSection = screen.queryByText("Border Countries:");
    expect(borderSection).not.toBeInTheDocument();
});
