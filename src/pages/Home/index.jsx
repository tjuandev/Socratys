import MainLogo from "../../assets/MainLogo.svg";
import bubble_blue from "../../assets/bubbles/bubble_blue.svg";
import bubble_pink from "../../assets/bubbles/bubble_pink.svg";
import bubble_purple from "../../assets/bubbles/bubble_purple.svg";

import { Container } from "./styles";
import { ButtonGradient } from "../../globalStyles";
import { Link } from "react-router-dom";

function Home() {
  document.querySelector("body").style.overflow = "hidden";

  return (
    <Container>
      <main>
        <img src={MainLogo} alt="main-logo" width="80%" />
        <p>Seu gerenciador gratuito das suas questões de estudos</p>
        <Link to="/dashboard">
          <ButtonGradient width="9rem" height="3.15rem">
            COMEÇAR
          </ButtonGradient>
        </Link>
      </main>
      <img src={bubble_blue} alt="bubble_blue" className="bubble_blue" />
      <img src={bubble_pink} alt="bubble_pink" className="bubble_pink" />
      <img src={bubble_purple} alt="bubble_purple" className="bubble_purple" />
    </Container>
  );
}

export default Home;
