import { useState } from "react";
import data from "../data.json";
import Sort from "./Sort";
import CountryCard from "./CountryCard";
import "../styles/Home.css";

const Home = () => {

    const [countries, setCountries] = useState([...data]);
    const [search, setSearch] = useState("");
    const [option, setOption] = useState("default");

    const nameSort = (value) => {
        if (value === "") {
            const copy = [...data];
            if (option !== "default") {
                setCountries(copy.filter(country => country.region === option));
                setSearch("");
                return;
            }
            setCountries(copy);
            setSearch("");
            return;
        }
        const filtered = data.filter(country => country.name.toLowerCase().match(value.toLowerCase()));
        if (option !== "default") {
            setCountries(filtered.filter(country => country.region === option));
            setSearch(value);
            return;
        }
        setCountries(filtered);
        setSearch(value);
    }

    const filter = (value) => {
        if (value === "default") {
            const copy = [...data];
            if (search !== "") {
                setCountries(copy.filter(country => country.name.toLowerCase().match(search.toLowerCase())));
                setOption("default");
                return;
            }
            setCountries(copy);
            setOption("default");
            return;
        }
        const filtered = data.filter(country => country.region === value);
        if (search !== "") {
            setCountries(filtered.filter(country => country.name.toLowerCase().match(search.toLowerCase())));
            setOption(value);
            return;
        }
        setCountries(filtered);
        setOption(value);
    }

    return (
        <div className="home">
        <Sort search={search} nameSort={nameSort} filter={filter} />
            <div className="cards container">
            {countries.map(country =>
            <CountryCard key={country.numericCode} country={country} />
            )}
            </div>
        </div>
    );
}

export default Home;
