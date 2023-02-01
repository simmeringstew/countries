import { useState } from "react";
import data from "../data.json";
import CountryCard from "./CountryCard";
import "../styles/Home.css";

const Home = () => {

    const [countries, setCountries] = useState([...data]);

    return (
        <div className="cards container">
            {countries.map(country =>
            <CountryCard key={country.numericCode} country={country} />
            )}
        </div>
    );
}

export default Home;
