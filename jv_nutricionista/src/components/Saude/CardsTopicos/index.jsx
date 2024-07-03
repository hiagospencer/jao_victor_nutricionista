import topicos from "../../../services/TopicoSaude";

import { Container } from "./styles";

function index() {
  const apiTopicos = topicos.topicos.map((topico) => (
    <Container key={topico.id}>
      <h2>{topico.title}</h2>
      <p>{topico.description}</p>
    </Container>
  ));


    return <>{ apiTopicos}</>;
}

export default index;
