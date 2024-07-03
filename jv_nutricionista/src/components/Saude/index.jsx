/* eslint-disable react/prop-types */
import CardsTopicos from "./CardsTopicos";
import { Container, GridImportancia } from "./styles";

function index({id}) {
  return (
    <Container id={id}>
      <h3>Saúde & Bem-Estar</h3>
      <p>
        Saiba qual é importância de consultar um nutricionista para alcançar e
        manter uma boa saúde através da alimentação.
      </p>
      <GridImportancia>
        <CardsTopicos />
      </GridImportancia>
    </Container>
  );
}

export default index;
