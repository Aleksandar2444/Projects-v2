import React, { useState, useEffect } from "react";
import axios from "axios";
import CountryCardContainer from "../../Components/CountryCardContainer/CountryCardContainer";
import "./CountriesPage.css";
import SearchInput from "../../Components/SearchInput/SearchInput";

const COUNTIRES_ALL_URL = "https://restcountries.com/v3.1/all";
const COUNTIRES_SEARCH_URL = "https://restcountries.com/v3.1/name/";

const CountriesPage = () => {
  const [countries, setCountries] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    //* If the search input is less then 1 letter list all countries
    if (searchValue.length < 1) {
      axios.get(COUNTIRES_ALL_URL).then((response) => {
        setErrorMsg(null);
        setCountries(response.data);
      });
      //* Otherwise list the search value
    } else {
      axios
        .get(COUNTIRES_SEARCH_URL + searchValue)
        .then((response) => {
          setErrorMsg(null);
          setCountries(response.data);
        })
        .catch((error) => {
          if (error.response.data.status === 404) {
            setErrorMsg("No countries found, please try again...");
          }
        });
    }
  }, [searchValue]);

  const updateSearchValue = (newValue) => {
    setSearchValue(newValue);
  };

  return (
    <section className="page CountriesPage">
      <div className="page__heading">
        <h2>Countries</h2>
        <p>You can use this page to search for countires</p>
      </div>
      <div className="content__container">
        <SearchInput updateSearchValue={updateSearchValue} />
        <CountryCardContainer countries={countries} errorMsg={errorMsg} />
      </div>
    </section>
  );
};

export default CountriesPage;
