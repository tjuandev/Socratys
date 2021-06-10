import Charts from "../Charts";
import CreateButton from "../CreateButton";
import EmptyCharts from "../EmptyCharts";
import { Container } from "./styles";

function Main() {
  return (
    <Container>
      <Charts />
      <EmptyCharts />
      <CreateButton />
    </Container>
  );
}

export default Main;
