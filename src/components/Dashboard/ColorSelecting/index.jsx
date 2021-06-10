import { useEffect, useState } from "react";
import { Container } from "./styles";
import CheckColor from "../../../assets/CheckColor.svg";

function ColorSelecting({ colorActive, setColorActive }) {
  const [renderButtons, setRenderButtons] = useState([]);
  const buttonColors = ["#8CC152", "#4FC1E9", "#EC87C0", "#FFCE54"];

  useEffect(() => {
    setRenderButtons(
      buttonColors.map((color) => {
        return (
          <button
            key={color}
            name={color}
            style={{ backgroundColor: color }}
            type="button"
            onClick={(e) => setColorActive(e.target.name)}
            className={colorActive === color ? "active" : "deactive"}
          >
            <img src={CheckColor} alt="check-color-icon" />
          </button>
        );
      })
    );
  }, [colorActive]);

  return (
    <Container>
      <div>
        <label htmlFor="color">Cor</label>
        <div className="checkboxBg">{renderButtons}</div>
      </div>
    </Container>
  );
}

export default ColorSelecting;
