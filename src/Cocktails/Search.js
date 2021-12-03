import React from "react";
import { useGlobalContext } from "./AppContext";

const Search = () => {
  const { searchTerm, setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef(null);
  React.useEffect(() => {
    searchValue.current.focus();
  }, []);
  const handleChange = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form className="form formB" onSubmit={handleChange}>
        <div className="input-group mb-3 seach-comp">
          <input
            className="form-control"
            type="text"
            ref={searchValue}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="search cocktail"
          />

          <button type="submit" className="btn search-btn input-group-text">
            search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
