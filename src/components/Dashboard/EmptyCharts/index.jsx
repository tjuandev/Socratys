import { Container } from "./styles";

import { ButtonGradient } from "../../../globalStyles";
import { useContext } from "react";
import { Context } from "../../../context/ChartContext";
import { ModalContext } from "../../../context/ModalContext";

function EmptyCharts() {
  const { chartsArray } = useContext(Context);
  const { openChartModal } = useContext(ModalContext);
  return (
    chartsArray.length === 0 && (
      <Container>
        <h2>Comece criando o seu primeiro gráfico</h2>
        <ButtonGradient
          width="14rem"
          height="4rem"
          fontSize="1.2rem"
          onClick={openChartModal}
        >
          CRIAR
        </ButtonGradient>
      </Container>
    )
  );
}

export default EmptyCharts;
