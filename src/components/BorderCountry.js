import { Link } from "react-router-dom";
import data from "../data.json";

const BorderCountry = ({ country, updateCountry }) => {

    const handleClick = () => {
        const borderCountry = data.filter(newCountry => newCountry.name === country.name);
        updateCountry({...borderCountry[0]});
    }

    return(
        <Link to={`/${country.name}`} className="country-fake-button" onClick={handleClick}>
            {country.name}
        </Link>
    );
}

export default BorderCountry;
