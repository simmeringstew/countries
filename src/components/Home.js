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
            setCountries([...data]);
            setSearch("");
            return;
        }
        setCountries(data.filter(country => country.name.toLowerCase().match(value.toLowerCase())));
        setSearch(value);
    }

    const filter = (value) => {

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
