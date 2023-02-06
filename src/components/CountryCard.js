import { Link } from "react-router-dom";
import "../styles/CountryCard.css";

const CountryCard = ({ country, updateCountry }) => {

    const handleClick = () => {
        updateCountry({...country});
    }

    return (
        <Link to={`/countries/${country.name}`} onClick={handleClick} className="card-link">
            <div className="card">
                <img src={country.flags.svg} alt={country.name} />
                <h2 className="margin">{country.name}</h2>
                <ul className="margin">
                    <li data-testid="country-card-population"><span className="bold">Population:</span> {country.population.toLocaleString()}</li>
                    <li data-testid="country-card-region"><span className="bold">Region:</span> {country.region}</li>
                    <li data-testid="country-card-capital"><span className="bold">Capital:</span> {country.capital}</li>
                </ul>
            </div>
        </Link>
    );
}

export default CountryCard;
