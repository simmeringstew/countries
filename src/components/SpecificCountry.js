/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import data from "../data.json";
import BorderCountry from "./BorderCountry";
import "../styles/SpecificCountry.css";

const SpecificCountry = ({ country, updateCountry }) => {

    const [currencies, setCurrencies] = useState(undefined);
    const [languages, setLanguages] = useState(undefined);
    const [borderCountries, setBorderCountries] = useState([]);
    useEffect(() => {
        const languagesHolder = [];
        for (let i = 0; i < country.languages.length; i++) {
            languagesHolder.push(country.languages[i].name);
        }
        if (languagesHolder.length === 1) {
            setLanguages(languagesHolder[0]);
        }
        else {
            setLanguages(languagesHolder.join(", "));
        }

        if (country.borders) {
            const borderCountriesHolder = [];
            for (let i = 0; i < country.borders.length; i++) {
                const code = country.borders[i];
                const borderCountry = data.filter(country => country.alpha3Code === code);
                const borderCountryObject = {
                    name: borderCountry[0].name,
                    id: i
                };
                borderCountriesHolder.push(borderCountryObject);
            }
            setBorderCountries([...borderCountriesHolder]);
        }

        const currenciesHolder = [];
        for (let i = 0; i < country.currencies.length; i++) {
            currenciesHolder.push(country.currencies[i].name);
        }
        if (currenciesHolder.length === 1) {
            setCurrencies(currenciesHolder[0]);
        }
        else {
            setCurrencies(currenciesHolder.join(", "));
        }
    }, []);

    if (borderCountries.length !== 0) {
        return(
            <div className="specific-country container">
                <Link to="/" className="back">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                    </svg>
                    <span>Back</span>
                </Link>
                <div className="country-data">
                    <img src={country.flags.svg} alt={country.name} />
                    <div className="country-data-text">
                        <h2 className="country-name">{country.name}</h2>
                        <div className="country-lists">
                            <ul>
                                <li><span className="bold">Native Name:</span> {country.nativeName}</li>
                                <li><span className="bold">Population:</span> {country.population}</li>
                                <li><span className="bold">Region:</span> {country.region}</li>
                                <li><span className="bold">Sub Region:</span> {country.subregion}</li>
                                <li><span className="bold">Capital:</span> {country.capital}</li>
                            </ul>
                            <ul>
                                <li><span className="bold">Top Level Domain:</span> {country.topLevelDomain}</li>
                                <li><span className="bold">Currencies:</span> {currencies}</li>
                                <li><span className="bold">Languages:</span> {languages}</li>
                            </ul>
                        </div>
                        <h3 className="border-title">Border Countries:</h3>
                        <div className="border-links">
                            {borderCountries.map(country =>
                            <BorderCountry key={country.id} country={country} updateCountry={updateCountry} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    else {
        return(
            <div className="specific-country container">
                <Link to="/" className="back">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                    </svg>
                    <span>Back</span>
                </Link>
                <div className="country-data">
                    <img src={country.flags.svg} alt={country.name} />
                    <div className="country-data-text">
                        <h2 className="country-name">{country.name}</h2>
                        <div className="country-lists">
                            <ul>
                                <li><span className="bold">Native Name:</span> {country.nativeName}</li>
                                <li><span className="bold">Population:</span> {country.population}</li>
                                <li><span className="bold">Region:</span> {country.region}</li>
                                <li><span className="bold">Sub Region:</span> {country.subregion}</li>
                                <li><span className="bold">Capital:</span> {country.capital}</li>
                            </ul>
                            <ul>
                                <li><span className="bold">Top Level Domain:</span> {country.topLevelDomain}</li>
                                <li><span className="bold">Currencies:</span> {currencies}</li>
                                <li><span className="bold">Languages:</span> {languages}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SpecificCountry;
