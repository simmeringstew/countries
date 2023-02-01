import "../styles/CountryCard.css";

const CountryCard = ({ country }) => {
    return (
        <div className="card">
            <img src={country.flags.svg} alt={country.name} />
            <h2>{country.name}</h2>
            <ul>
                <li><span className="bold">Population:</span> {country.population}</li>
                <li><span className="bold">Region:</span> {country.region}</li>
                <li><span className="bold">Capital:</span> {country.capital}</li>
            </ul>
        </div>
    );
}

export default CountryCard;
