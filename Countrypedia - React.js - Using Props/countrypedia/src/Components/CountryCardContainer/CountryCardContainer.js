import "./CountryCardContainer.css";
import CountryCard from "../CountryCard/CountryCard";
import error from "../../../src/error.jpg";
import error500 from "../../../src/error500.jpg";

const CountryCardContainer = ({ countries, errorMsg }) => {
  return (
    <div className="CountryCardContainer">
      {!countries && (
        <div className="error__page">
          <h2>Loading...</h2>
          <img src={error500} alt="error500.jpg" />
        </div>
      )}
      {errorMsg && (
        <div className="error__page">
          <h2>{errorMsg}</h2>
          <img src={error} alt="error.jpg" />
        </div>
      )}
      {countries &&
        !errorMsg &&
        countries.map((country, i) => (
          <CountryCard key={i} country={country} />
        ))}
    </div>
  );
};

export default CountryCardContainer;
