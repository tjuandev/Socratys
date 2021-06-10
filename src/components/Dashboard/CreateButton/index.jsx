import { useContext } from "react";
import { ModalContext } from "../../../context/ModalContext";
import { Container } from "./styles";
import PlusIcon from "../../../assets/plusIcon";
import { Context } from "../../../context/ChartContext";

function CreateButton() {
  const { openChartModal } = useContext(ModalContext);
  const { chartsArray } = useContext(Context);

  return (
    chartsArray.length > 0 && (
      <Container onClick={openChartModal}>
        <PlusIcon fill="#f4f4f4" width="1.25rem" />
      </Container>
    )
  );
}

export default CreateButton;
