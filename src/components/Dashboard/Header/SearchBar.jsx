import { useContext } from "react";
import SearchIcon from "../../../assets/SearchIcon.svg";
import { Context } from "../../../context/ChartContext";
import { SearchBarContainer } from "./styles";

function SearchBar() {
  const { searchItem, setSearchItem } = useContext(Context);

  return (
    <SearchBarContainer>
      <input type="checkbox" id="check" />
      <div className="box">
        <input
          type="text"
          placeholder="Pesquisar..."
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
        />
        <label htmlFor="check">
          <img src={SearchIcon} alt="search-icon" />
        </label>
      </div>
    </SearchBarContainer>
  );
}

export default SearchBar;
