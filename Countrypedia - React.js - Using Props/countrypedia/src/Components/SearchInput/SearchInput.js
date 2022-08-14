import React, { useEffect, useState } from "react";
import "./SearchInput.css";

const SearchInput = (props) => {
  const [inputValue, setInputValue] = useState("");

  //* This will rerender the component if we stop writting for 1 second
  useEffect(() => {
    const timer = setTimeout(() => {
      props.updateSearchValue(inputValue);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <div className="SearchInput">
      <input
        type="text"
        value={inputValue}
        placeholder="Search for countries"
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
