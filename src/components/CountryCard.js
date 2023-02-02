import { Link } from "react-router-dom";
import "../styles/CountryCard.css";

const CountryCard = ({ country, updateCountry }) => {

    const handleClick = () => {
        updateCountry({...country});
    }

    return (
        <Link to={`/${country.name}`} onClick={handleClick} className="card-link">
            <div className="card">
                <img src={country.flags.svg} alt={country.name} />
                <h2 className="margin">{country.name}</h2>
                <ul className="margin">
                    <li><span className="bold">Population:</span> {country.population}</li>
                    <li><span className="bold">Region:</span> {country.region}</li>
                    <li><span className="bold">Capital:</span> {country.capital}</li>
                </ul>
            </div>
        </Link>
    );
}

export default CountryCard;
