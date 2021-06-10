import { Container } from "./styles";
import { Link } from "react-router-dom";

import SocratysText from "../../../assets/Socratys.svg";
import Hexagonal from "../../../assets/Hexagonal.svg";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <Container>
      <Link to="/">
        <div>
          <img src={Hexagonal} alt="Hexagonal-Logo" className="hexLogo" />
          <img src={SocratysText} alt="Socratys-Logo" className="text" />
        </div>
      </Link>
      <SearchBar />
    </Container>
  );
}

export default Header;
